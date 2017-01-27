<?php

namespace App\Console\Commands;

use Cerbero\CommandValidator\ValidatesInput;
use Illuminate\Console\Command as IlluminateCommand;
use Illuminate\Support\Facades\App;

abstract class Command extends IlluminateCommand
{
    use ValidatesInput;

    public function __construct()
    {
        parent::__construct();

        App::setLocale('en');
    }

    protected function rules()
    {
        return [];
    }
}
