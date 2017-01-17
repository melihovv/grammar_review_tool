<?php

namespace App\Http\Requests\Right;

use App\Http\Requests\Request;
use Illuminate\Validation\Rule;

abstract class RightRequest extends Request
{
    public function rules()
    {
        return array_merge(parent::rules(), [
            'user_id' => [
                'required',
                'numeric',
                'min:1',
                Rule::exists('users', 'id'),
            ],
            'view' => 'required|boolean',
            'comment' => 'required|boolean',
        ]);
    }

    public function additionalInput()
    {
        return array_merge(parent::additionalInput(), [
            'grammar_id' => 0,
        ]);
    }

    public function sanitizers()
    {
        return array_merge(parent::sanitizers(), [
            'grammar_id' => [function () {
                return $this->route('grammar')->id;
            }],
        ]);
    }
}
