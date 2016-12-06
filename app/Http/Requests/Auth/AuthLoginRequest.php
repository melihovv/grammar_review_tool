<?php

namespace App\Http\Requests\Auth;

use App\Http\Requests\Request;

class AuthLoginRequest extends Request
{
    public function rules()
    {
        return [
            'email' => 'required|email',
            'password' => 'required|min:6',
        ];
    }
}
