<?php

namespace App\Http\Transformers;

use App\Entities\Comment;

class CommentTransformer extends Transformer
{
    protected $defaultIncludes = [
        'user',
    ];

    public function transform(Comment $model)
    {
        return array_combine(static::attrs(), [
            $model->id,
            $model->user_id,
            $model->grammar_id,
            $model->content,
            $model->row,
            $model->column,
        ]);
    }

    public static function attrs()
    {
        return [
            'id',
            'user_id',
            'grammar_id',
            'content',
            'row',
            'column',
        ];
    }

    public function includeUser(Comment $model)
    {
        return $this->item($model->user, new UserTransformer());
    }
}
