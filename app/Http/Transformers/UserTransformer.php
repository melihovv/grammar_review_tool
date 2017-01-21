<?php

namespace App\Http\Transformers;

use App\Entities\User;

class UserTransformer extends Transformer
{
    public function transform(User $model)
    {
        return array_combine(static::attrs(), [
            $model->id,
            e($model->name),
            e($model->email),
            $model->is_admin,
        ]);
    }

    public static function attrs()
    {
        return [
            'id',
            'name',
            'email',
            'is_admin',
        ];
    }
}
