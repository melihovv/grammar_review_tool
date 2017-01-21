<?php

namespace App\Http\Transformers;

use App\Entities\Grammar;

class GrammarTransformer extends Transformer
{
    protected $availableIncludes = [
        'owner',
        'comments',
        'rights',
    ];

    public function transform(Grammar $model)
    {
        return array_combine(static::attrs(), [
            $model->id,
            $model->user_id,
            e($model->name),
            e($model->content),
            $model->public_view,
            $model->allow_to_comment,
        ]);
    }

    public static function attrs()
    {
        return [
            'id',
            'user_id',
            'name',
            'content',
            'public_view',
            'allow_to_comment',
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

    public function includeRights(Grammar $model)
    {
        return $this->collection($model->rights, new RightTransformer());
    }
}
