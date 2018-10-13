<?php

namespace App\Console\Commands;

use Illuminate\Support\Str;

class DuskCommand extends \Laravel\Dusk\Console\DuskCommand
{
    protected function phpunitArguments($options)
    {
        $arguments = parent::phpunitArguments($options);

        for ($i = 0, $count = count($arguments); $i < $count; $i++) {
            if (Str::startsWith($arguments[$i], '--env')) {
                unset($arguments[$i]);
            }
        }

        return $arguments;
    }
}
