<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Grammar extends Model
{
    use AdditionalMethods;

    protected $fillable = [
        'owner',
        'name',
        'content',
        'public_view',
    ];

    protected $casts = [
        'owner' => 'integer',
        'public_view' => 'boolean',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'owner');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function rights()
    {
        return $this->hasMany(Right::class);
    }
}
