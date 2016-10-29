<?php

namespace App\Entities;

trait AdditionalMethods
{
    public static function last()
    {
        return static::orderBy('id', 'desc')->first();
    }
}
