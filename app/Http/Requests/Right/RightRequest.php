<?php

namespace App\Http\Requests\Right;

use App\Http\Requests\Request;
use Illuminate\Validation\Rule;

abstract class RightRequest extends Request
{
    public function rules()
    {
        return [
            'user_id' => [
                'required',
                'numeric',
                'min:1',
                Rule::exists('users', 'id'),
            ],
            'view' => 'required|boolean',
            'comment' => 'required|boolean',
        ];
    }

    public function all()
    {
        return array_merge(parent::all(), [
            'grammar_id' => $this->route('grammar')->id,
        ]);
    }
}
