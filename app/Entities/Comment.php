<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Yadakhov\InsertOnDuplicateKey;

class Comment extends Model
{
    use AdditionalMethods;

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
     * @return BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return BelongsTo
     */
    public function grammar()
    {
        return $this->belongsTo(Grammar::class);
    }
}
