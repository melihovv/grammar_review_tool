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
            $model->version_id,
            newLine2br(e($model->content)),
            $model->row,
            $model->column,
        ]);
    }

    public static function attrs()
    {
        return [
            'id',
            'user_id',
            'version_id',
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
