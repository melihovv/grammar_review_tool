<?php

namespace App\Http\Requests;

class GrammarRequest extends Request
{
    public function rules()
    {
        return [
            'owner' => 'required|integer|min:1|exists:users,id',
            'name' => 'required|string|max:255',
            'content' => 'required|string|max:65535',
            'public_view' => 'boolean',
        ];
    }

    public function sanitizers()
    {
        return [
            'name' => 'trim',
        ];
    }
}
