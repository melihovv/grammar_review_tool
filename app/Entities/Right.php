<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Entities\Right
 *
 * @property integer $id
 * @property integer $user_id
 * @property integer $grammar_id
 * @property boolean $view
 * @property boolean $comment
 * @property boolean $edit
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \App\Entities\User $user
 * @property-read \App\Entities\Grammar $grammar
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Right whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Right whereUserId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Right whereGrammarId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Right whereView($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Right whereComment($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Right whereEdit($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Right whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Right whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Right extends Model
{
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
