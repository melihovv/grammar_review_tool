<?php

namespace App\Http\Requests\Comment;

use Dingo\Api\Auth\Auth;

class CommentUpdateRequest extends CommentRequest
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

        $user = app(Auth::class)->user();
        if (!$user->is_admin || $user->isCommentOwner($comment)) {
            return array_merge(parent::sanitizers(), $sanitizers, [
                'user_id' => [function () {
                    return app(Auth::class)->user()->id;
                }],
                'grammar_id' => [function () {
                    return $this->route('grammar')->id;
                }],
            ]);
        }

        $grammar = $this->route('grammar');

        return array_merge(parent::sanitizers(), $sanitizers, [
            'user_id' => [function () use ($grammar) {
                return $grammar->owner->id;
            }],
            'grammar_id' => [function () use ($grammar) {
                return $grammar->id;
            }],
        ]);
    }
}
