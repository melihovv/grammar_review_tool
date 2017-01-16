<?php

namespace App\Http\Requests\Comment;

use Dingo\Api\Auth\Auth;

class CommentUpdateRequest extends CommentRequest
{
    public function all()
    {
        if (!app(Auth::class)->user()->is_admin) {
            return parent::all();
        }

        $grammar = $this->route('grammar');

        return array_merge(parent::all(), [
            'user_id' => $grammar->owner->id,
            'grammar_id' => $grammar->id,
        ]);
    }
}
