<?php

namespace App\Http\Requests\Right;

use App\Http\Requests\Request;
use Illuminate\Validation\Rule;

class RightStoreRequest extends Request
{
    public function rules()
    {
        return array_merge(parent::rules(), [
            'users.*' => [
                'bail',
                'required',
                'numeric',
                'min:1',
                Rule::exists('users', 'id'),
            ],
            'view' => 'required|boolean',
            'comment' => 'required|boolean',
            'edit' => 'required|boolean',
            'admin' => 'required|boolean',
        ]);
    }
}
