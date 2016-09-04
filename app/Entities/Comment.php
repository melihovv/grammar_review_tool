<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'user_id',
        'grammar_id',
        'content',
        'row',
        'column',
    ];

    protected $casts = [
        'user_id' => 'integer',
        'grammar_id' => 'integer',
        'row' => 'integer',
        'column' => 'integer',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function grammar()
    {
        return $this->belongsTo(Grammar::class);
    }
}
