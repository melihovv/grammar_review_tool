<?php

namespace App\Http\Requests\Right;

use App\Http\Requests\Request;
use Illuminate\Validation\Rule;

class RightUpdateRequest extends Request
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

    public function extraData()
    {
        return array_merge(parent::extraData(), [
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
