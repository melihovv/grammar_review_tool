<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;

class AuthRegisterRequest extends Request
{
    public function rules()
    {
        return [
            'name' => 'required|max:255',
            'email' => [
                'required',
                'email',
                'max:255',
                Rule::unique('users'),
            ],
            'password' => 'required|min:6',
        ];
    }
}
