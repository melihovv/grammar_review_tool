<?php

namespace App\Http\Requests\Right;

use App\Http\Requests\Request;
use Illuminate\Validation\Rule;

class UpdateRequest extends Request
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
            'view_comment' => 'required|boolean',
            'edit' => 'required|boolean',
            'admin' => 'required|boolean',
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
