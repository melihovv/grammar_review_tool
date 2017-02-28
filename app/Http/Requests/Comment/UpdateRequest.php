<?php

namespace App\Http\Requests\Comment;

class UpdateRequest extends BaseRequest
{
    public function sanitizers()
    {
        $comment = $this->route('comment');
        $sanitizers = [
            'row' => [function () use ($comment) {
                return $comment->row;
            }],
            'column' => [function () use ($comment) {
                return $comment->column;
            }],
        ];

        $user = auth()->user();
        if (!$user->is_admin || $user->isCommentOwner($comment)) {
            return array_merge(parent::sanitizers(), $sanitizers, [
                'user_id' => [function () use ($user) {
                    return $user->id;
                }],
            ]);
        }

        $grammar = $this->route('grammar');

        return array_merge(parent::sanitizers(), $sanitizers, [
            'user_id' => [function () use ($grammar) {
                return $grammar->owner->id;
            }],
        ]);
    }
}
