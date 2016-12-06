<?php

namespace App\Http\Requests;

use Dingo\Api\Auth\Auth;

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

    public function all()
    {
        return array_merge(parent::all(), [
            'user_id' => app(Auth::class)->user()->id,
            'grammar_id' => $this->route('grammar')->id,
        ]);
    }
}
