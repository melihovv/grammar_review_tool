<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;
    use AdditionalMethods;

    protected $fillable = [
        'name',
        'email',
        'password',
        'is_admin',
        'api_token',
        'confirmed',
        'email_token',
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'api_token',
        'email_token',
    ];

    protected $casts = [
        'is_admin' => 'boolean',
        'confirmed' => 'boolean',
    ];

    /**
     * @return HasMany
     */
    public function grammars()
    {
        return $this->hasMany(Grammar::class);
    }

    /**
     * Get grammars, which are available to current user.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function availableGrammars()
    {
        if ($this->is_admin) {
            return Grammar::query();
        }

        return Grammar::whereHas('rights', function ($q) {
            $q
                ->where('view', true)
                ->orWhere('comment', true)
                ->orWhere('edit', true);
        })
            ->orWhere('public_view', true)
            ->orWhere('user_id', $this->id);
    }

    /**
     * @return HasMany
     */
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    /**
     * @return HasMany
     */
    public function rights()
    {
        return $this->hasMany(Right::class);
    }

    /**
     * @param Grammar $grammar
     *
     * @return bool
     */
    public function isGrammarOwner(Grammar $grammar)
    {
        return $this->id !== null && $this->id === $grammar->user_id;
    }

    /**
     * @param Comment $comment
     *
     * @return bool
     */
    public function isCommentOwner(Comment $comment)
    {
        return $this->id !== null && $this->id === $comment->user_id;
    }

    /**
     * @param string|array $right
     * @param Grammar $grammar
     *
     * @return bool
     * @SuppressWarnings(PHPMD.BooleanArgumentFlag)
     * @SuppressWarnings(PHPMD.CyclomaticComplexity)
     */
    public function hasRight($right, Grammar $grammar, $requireAll = false)
    {
        if (empty($right)) {
            return false;
        }

        $model = $this->rights()->where('grammar_id', $grammar->id);

        if (is_array($right)) {
            $model = $model->first();

            if ($model === null) {
                return false;
            }

            foreach ($right as $r) {
                $hasRight = $model->$r !== null && $model->$r !== false;

                if ($hasRight && !$requireAll) {
                    return true;
                } elseif (!$hasRight && $requireAll) {
                    return false;
                }
            }

            return $requireAll;
        }

        return $model->where($right, true)->first() !== null;
    }

    /**
     * Confirm user email.
     */
    public function confirmed()
    {
        $this->confirmed = true;
        $this->email_token = null;

        $this->save();
    }
}
