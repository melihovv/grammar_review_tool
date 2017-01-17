<?php

namespace App\Http\Requests\Comment;

use App\Http\Requests\Request;

abstract class CommentRequest extends Request
{
    public function rules()
    {
        return array_merge(parent::rules(), [
            'content' => 'required|string|max:65535',
            'row' => 'required|integer|min:1',
            'column' => 'required|integer|min:0',
        ]);
    }

    public function additionalInput()
    {
        return array_merge(parent::additionalInput(), [
            'user_id' => 0,
            'grammar_id' => 0,
        ]);
    }

    public function sanitizers()
    {
        return [
            'content' => 'trim',
        ];
    }
}
