<?php

namespace App\Http\Transformers;

use App\Entities\Comment;
use League\Fractal\TransformerAbstract;

/**
 * Class CommentTransformer.
 */
class CommentTransformer extends TransformerAbstract
{
    /**
     * Transform the Comment entity.
     *
     * @param Comment $model
     *
     * @return array
     */
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
}
