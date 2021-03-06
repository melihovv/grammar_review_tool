<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Right extends Model
{
    use AdditionalMethods;

    protected $fillable = [
        'user_id',
        'grammar_id',
        'view_comment',
        'edit',
        'admin',
    ];

    protected $casts = [
        'user_id' => 'integer',
        'grammar_id' => 'integer',
        'view_comment' => 'boolean',
        'edit' => 'boolean',
        'admin' => 'boolean',
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
