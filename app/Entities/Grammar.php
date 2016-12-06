<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Grammar extends Model
{
    use AdditionalMethods;

    protected $fillable = [
        'owner',
        'name',
        'content',
        'public_view',
        'allow_to_comment',
    ];

    protected $casts = [
        'owner' => 'integer',
        'public_view' => 'boolean',
        'allow_to_comment' => 'boolean',
    ];

    /**
     * @return BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'owner');
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
}
