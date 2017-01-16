<?php

namespace App\Http\Transformers;

use App\Entities\Grammar;

class GrammarTransformer extends Transformer
{
    protected $availableIncludes = [
        'owner',
        'comments',
    ];

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

    public function includeOwner(Grammar $model)
    {
        return $this->item($model->owner, new UserTransformer());
    }

    public function includeComments(Grammar $model)
    {
        return $this->collection($model->comments, new CommentTransformer());
    }
}
