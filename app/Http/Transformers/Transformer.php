<?php

namespace App\Http\Transformers;

use App\Entities\User;
use League\Fractal\TransformerAbstract;

abstract class Transformer extends TransformerAbstract
{
    abstract public static function attrs();
}
