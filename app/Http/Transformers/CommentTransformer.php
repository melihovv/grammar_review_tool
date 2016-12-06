<?php

namespace App\Http\Transformers;

use App\Entities\Comment;

class CommentTransformer extends Transformer
{
    public function transform(Comment $model)
    {
        return [
            'id' => $model->id,
            'user_id' => $model->user_id,
            'grammar_id' => $model->grammar_id,
            'content' => $model->content,
            'row' => $model->row,
            'column' => $model->column,
        ];
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
}
