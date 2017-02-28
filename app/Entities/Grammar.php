<?php

namespace App\Entities;

use Baum\Node;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Grammar extends Model
{
    use AdditionalMethods;

    protected $columns = [
        'id',
        'user_id',
        'name',
        'public_view',
        'allow_to_comment',
        'created_at',
        'updated_at',
    ];

    protected $fillable = [
        'user_id',
        'name',
        'public_view',
        'allow_to_comment',
    ];

    protected $casts = [
        'user_id' => 'integer',
        'public_view' => 'boolean',
        'allow_to_comment' => 'boolean',
    ];

    /**
     * @return BelongsTo
     */
    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * @return HasMany
     */
    public function versions()
    {
        return $this->hasMany(Version::class);
    }

    /**
     * @return HasMany
     */
    public function rights()
    {
        return $this->hasMany(Right::class);
    }

    /**
     * @param int $version
     * @return Builder
     */
    public function version($version)
    {
        return $this->versions()->where('depth', $version);
    }

    /**
     * @param int $version
     * @return Grammar
     */
    public function getVersion($version)
    {
        return $this->version($version)->first();
    }

    /**
     * @return Builder
     */
    public function latestVersion()
    {
        return Version::where('grammar_id', $this->id)
            ->orderBy('depth', 'desc');
    }

    /**
     * @return Grammar
     */
    public function getLatestVersion()
    {
        return $this->latestVersion()->first();
    }

    /**
     * Checks that grammar has version with specified id.
     *
     * @param $versionId
     *
     * @return bool
     */
    public function hasVersionWithId($versionId)
    {
        return $this->versions()->where('id', $versionId)->first() !== null;
    }

    /**
     * Checks that grammar has specified version.
     *
     * @param $version
     *
     * @return bool
     */
    public function hasVersion($version)
    {
        return $this->versions()->where('depth', $version)->first() !== null;
    }
}
