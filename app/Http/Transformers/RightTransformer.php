<?php

namespace App\Http\Transformers;

use App\Entities\Right;

class RightTransformer extends Transformer
{
    protected $defaultIncludes = [
        'user',
    ];

    public function transform(Right $model)
    {
        return array_combine(static::attrs(), [
            $model->id,
            $model->user_id,
            $model->grammar_id,
            $model->view_comment,
            $model->edit,
            $model->admin,
        ]);
    }

    public static function attrs()
    {
        return [
            'id',
            'user_id',
            'grammar_id',
            'view_comment',
            'edit',
            'admin',
        ];
    }

    public function includeUser(Right $model)
    {
        return $this->item($model->user, new UserTransformer());
    }
}
