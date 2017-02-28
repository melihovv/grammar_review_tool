<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    use AdditionalMethods;

    protected $fillable = [
        'user_id',
        'version_id',
        'content',
        'row',
        'column',
    ];

    protected $casts = [
        'user_id' => 'integer',
        'version_id' => 'integer',
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
    public function version()
    {
        return $this->belongsTo(Version::class);
    }
}
