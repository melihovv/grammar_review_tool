<?php

namespace App\Http\Requests;

class CommentRequest extends Request
{
    public function rules()
    {
        return [
            'content' => 'required|string|max:65535',
            'row' => 'required|integer|min:1',
            'column' => 'required|integer|min:0',
        ];
    }
}
