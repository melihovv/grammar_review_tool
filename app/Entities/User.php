<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;
    use AdditionalMethods;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'is_admin',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
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
            $q->where('view', true)->orWhere('edit', true);
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
     * @return bool
     */
    public function isOwner(Grammar $grammar)
    {
        return $this->id === $grammar->owner;
    }

    /**
     * @param string $right
     * @param Grammar $grammar
     * @return bool
     */
    public function hasRight($right, Grammar $grammar)
    {
        // TODO array of rights.
        $right = $this->rights()
            ->where('grammar_id', $grammar->id)
            ->where($right, true)
            ->first();

        return $right !== null;
    }
}
