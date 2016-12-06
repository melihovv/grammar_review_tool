<?php

namespace App\Http\Transformers;

use App\Entities\User;

class UserTransformer extends Transformer
{
    public function transform(User $model)
    {
        return [
            'id' => $model->id,
            'name' => $model->name,
            'email' => $model->email,
            'is_admin' => $model->is_admin,
        ];
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
