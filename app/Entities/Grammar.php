<?php

namespace App\Entities;

use Baum\Node;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Grammar extends Node
{
    use AdditionalMethods;

    protected $columns = [
        'id',
        'user_id',
        'name',
        'content',
        'public_view',
        'allow_to_comment',
        'parent_id',
        'lft',
        'rgt',
        'depth',
        'created_at',
        'updated_at',
    ];

    protected $fillable = [
        'user_id',
        'name',
        'content',
        'public_view',
        'allow_to_comment',
    ];

    protected $casts = [
        'user_id' => 'integer',
        'public_view' => 'boolean',
        'allow_to_comment' => 'boolean',
        'parent_id' => 'integer',
        'lft' => 'integer',
        'rgt' => 'integer',
        'depth' => 'integer',
    ];

    protected $guarded = [
        'id',
        'parent_id',
        'lft',
        'rgt',
        'depth',
    ];

    protected $scoped = [
        'user_id',
    ];

    public function scopeExclude($query, $columns = [])
    {
        return $query->select(array_diff($this->columns, (array)$columns));
    }

    /**
     * @return BelongsTo
     */
    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
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
