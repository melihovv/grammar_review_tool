<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Entities\Grammar.
 *
 * @property int $id
 * @property int $owner
 * @property string $name
 * @property string $content
 * @property bool $public_view
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \App\Entities\User $user
 *
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Grammar whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Grammar whereOwner($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Grammar whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Grammar whereContent($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Grammar wherePublicView($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Grammar whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\Grammar whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Grammar extends Model
{
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
}
