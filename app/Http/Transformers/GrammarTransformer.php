<?php

namespace App\Http\Transformers;

use App\Entities\Grammar;

class GrammarTransformer extends Transformer
{
    public function transform(Grammar $model)
    {
        return array_combine(static::attrs(), [
            $model->id,
            $model->owner,
            $model->name,
            $model->content,
            $model->public_view,
        ]);
    }

    public static function attrs()
    {
        return [
            'id',
            'owner',
            'name',
            'content',
            'public_view',
        ];
    }
}
