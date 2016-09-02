<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Entities\Comment.
 *
 * @property-read \App\Entities\User $user
 * @property-read \App\Entities\Grammar $grammar
 * @mixin \Eloquent
 *
 * @property int $id
 * @property int $user_id
 * @property int $grammar_id
 * @property string $content
 * @property int $row
 * @property int $column
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 *
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Comment whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Comment whereUserId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Comment whereGrammarId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Comment whereContent($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Comment whereRow($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Comment whereColumn($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Comment whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Comment whereUpdatedAt($value)
 */
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
