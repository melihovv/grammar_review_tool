<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Right extends Model
{
    use AdditionalMethods;

    protected $fillable = [
        'user_id',
        'grammar_id',
        'view',
        'comment',
        'edit',
    ];

    protected $casts = [
        'user_id' => 'integer',
        'grammar_id' => 'integer',
        'view' => 'boolean',
        'comment' => 'boolean',
        'edit' => 'boolean',
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
