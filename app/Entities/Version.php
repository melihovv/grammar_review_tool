<?php

namespace App\Entities;

use Baum\Node;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Version extends Node
{
    use AdditionalMethods;

    protected $columns = [
        'id',
        'grammar_id',
        'updater_id',
        'content',
        'parent_id',
        'lft',
        'rgt',
        'depth',
        'created_at',
        'updated_at',
    ];

    protected $fillable = [
        'grammar_id',
        'updater_id',
        'content',
    ];

    protected $casts = [
        'grammar_id' => 'integer',
        'updater_id' => 'integer',
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
        'grammar_id',
    ];

    public function scopeExclude($query, $columns = [])
    {
        return $query->select(array_diff($this->columns, (array) $columns));
    }

    /**
     * @return BelongsTo
     */
    public function grammar()
    {
        return $this->belongsTo(Grammar::class);
    }

    /**
     * @return BelongsTo
     */
    public function updater()
    {
        return $this->belongsTo(User::class, 'updater_id');
    }

    /**
     * @return HasMany
     */
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
