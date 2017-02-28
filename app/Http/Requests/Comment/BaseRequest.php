<?php

namespace App\Http\Requests\Comment;

use App\Http\Requests\Request;

abstract class BaseRequest extends Request
{
    public function rules()
    {
        return array_merge(parent::rules(), [
            'content' => 'required|string|max:65535',
            'version_id' => 'required|integer|min:1|belongs_to_grammar:id',
        ]);
    }

    public function extraData()
    {
        return array_merge(parent::extraData(), [
            'user_id' => 0,
            'grammar_id' => 0,
            'row' => 0,
            'column' => 0,
        ]);
    }

    public function sanitizers()
    {
        return [
            'content' => 'trim',
        ];
    }
}
