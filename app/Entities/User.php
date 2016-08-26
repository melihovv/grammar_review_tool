<?php

namespace App\Entities;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * App\Entities\User.
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $password
 * @property bool $is_admin
 * @property string $remember_token
 * @property string $api_token
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $unreadNotifications
 *
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\User whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\User whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\User whereEmail($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\User wherePassword($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\User whereIsAdmin($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\User whereRememberToken($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\User whereApiToken($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Entities\User whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class User extends Authenticatable implements Transformable
{
    use Notifiable, TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'is_admin',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'api_token',
    ];

    protected $casts = [
        'is_admin' => 'boolean',
    ];
}
