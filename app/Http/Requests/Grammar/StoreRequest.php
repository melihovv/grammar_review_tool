<?php

namespace App\Http\Requests\Grammar;

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
            'type' => 'required|string|in:lemon,bison',
        ]);
    }
}
