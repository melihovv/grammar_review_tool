<?php

namespace App\Entities;

trait AdditionalMethods
{
    public static function last()
    {
        return static::orderBy('id', 'desc')->first();
    }

    public function getCreatedAtAgoAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    public function getUpdatedAtAgoAttribute()
    {
        return $this->updated_at->diffForHumans();
    }
}
