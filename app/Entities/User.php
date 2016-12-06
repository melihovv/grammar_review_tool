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
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'is_admin' => 'boolean',
    ];

    /**
     * @return HasMany
     */
    public function grammars()
    {
        return $this->hasMany(Grammar::class, 'owner');
    }

    public function availableGrammars()
    {
        if ($this->is_admin) {
            return Grammar::getQuery();
        }

        return Grammar::whereHas('rights', function ($q) {
            $q->where('view', true)->orWhere('comment', true);
        })
            ->orWhere('public_view', true)
            ->orWhere('owner', $this->id);
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
    public function isOwner(Grammar $grammar)
    {
        return $this->id === $grammar->owner;
    }

    /**
     * @param string|array $right
     * @param Grammar      $grammar
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
}
