<?php

namespace App\Http\Transformers;

use stdClass;

class DiffTransformer extends Transformer
{
    public function transform(stdClass $model)
    {
        $lines = [];
        foreach ($model->lines as $line) {
            $lines[] = ['line' => e($line['line'])] + $line;
        }

        return array_combine(static::attrs(), [$lines]);
    }

    public static function attrs()
    {
        return [
            'lines',
        ];
    }
}
