<?php

namespace App\Http\Requests\Comment;

use Dingo\Api\Auth\Auth;

class CommentStoreRequest extends CommentRequest
{
    public function sanitizers()
    {
        return array_merge(parent::sanitizers(), [
            'user_id' => [function () {
                return app(Auth::class)->user()->id;
            }],
            'grammar_id' => [function () {
                return $this->route('grammar')->id;
            }],
        ]);
    }
}
