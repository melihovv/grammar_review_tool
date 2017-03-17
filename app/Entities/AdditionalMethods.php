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

    /**
     * Smarter version of whereIn method.
     *
     * @param  string  $column
     * @param  mixed   $values
     * @param  string  $boolean
     * @param  bool    $not
     * @return $this
     */
    public static function smarterWhereIn(
        $column,
        $values,
        $boolean = 'and',
        $not = false
    ) {
        $amount = count($values);

        if ($amount === 1) {
            return static::where($column, $values[0]);
        } elseif ($amount > 1) {
            return static::whereIn($column, $values, $boolean, $not);
        } else {
            return static::query();
        }
    }
}
