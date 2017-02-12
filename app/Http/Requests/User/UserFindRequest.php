<?php

namespace App\Http\Requests\User;

use App\Http\Requests\Request;

class UserFindRequest extends Request
{
    public function rules()
    {
        return array_merge(parent::rules(), [
            'query' => 'required|string',
        ]);
    }

    public function sanitizers()
    {
        return array_merge(parent::sanitizers(), [
            'query' => 'trim',
        ]);
    }
}
