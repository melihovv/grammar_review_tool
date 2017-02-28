<?php

namespace App\Http\Requests\Comment;

class StoreRequest extends BaseRequest
{
    public function sanitizers()
    {
        return array_merge(parent::sanitizers(), [
            'user_id' => [function () {
                return auth()->user()->id;
            }],
        ]);
    }

    public function rules()
    {
        return array_merge(parent::rules(), [
            'row' => 'required|integer|min:1',
            'column' => 'required|integer|min:-1',
        ]);
    }
}
