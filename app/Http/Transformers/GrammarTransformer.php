<?php

namespace App\Http\Transformers;

use App\Entities\Grammar;

class GrammarTransformer extends Transformer
{
    public function transform(Grammar $model)
    {
        return [
            'id' => $model->id,
            'owner' => $model->owner,
            'name' => $model->name,
            'content' => $model->content,
            'public_view' => $model->public_view,
        ];
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
