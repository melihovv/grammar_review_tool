<?php

namespace App\Http\Requests\Comment;

use Dingo\Api\Auth\Auth;

class CommentUpdateRequest extends CommentRequest
{
    public function sanitizers()
    {
        if (!app(Auth::class)->user()->is_admin) {
            return array_merge(parent::sanitizers(), [
                'user_id' => [function () {
                    return app(Auth::class)->user()->id;
                }],
                'grammar_id' => [function () {
                    return $this->route('grammar')->id;
                }],
            ]);
        }

        $grammar = $this->route('grammar');

        return array_merge(parent::sanitizers(), [
            'user_id' => [function () use ($grammar) {
                return $grammar->owner->id;
            }],
            'grammar_id' => [function () use ($grammar) {
                return $grammar->id;
            }],
        ]);
    }
}
