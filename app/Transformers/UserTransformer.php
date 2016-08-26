<?php

namespace App\Transformers;

use App\Entities\User;
use League\Fractal\TransformerAbstract;

/**
 * Class UserTransformer.
 */
class UserTransformer extends TransformerAbstract
{
    /**
     * Transform the User entity.
     *
     * @param User $model
     *
     * @return array
     */
    public function transform(User $model)
    {
        return [
            'id' => $model->id,
            'name' => $model->name,
            'email' => $model->email,
            'is_admin' => $model->is_admin,
            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at,
        ];
    }
}
