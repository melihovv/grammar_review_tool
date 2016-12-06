<?php

namespace App\Http\Requests\Comment;

class CommentUpdateRequest extends CommentRequest
{
    public function all()
    {
        $grammar = $this->route('grammar');

        return array_merge(parent::all(), [
            'user_id' => $grammar->user->id,
            'grammar_id' => $grammar->id,
        ]);
    }
}
