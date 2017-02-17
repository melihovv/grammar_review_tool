<?php

namespace App\Http\Requests\Grammar;

class GrammarUpdateRequest extends BaseRequest
{
    public function sanitizers()
    {
        $grammar = $this->route('grammar');

        return array_merge(parent::sanitizers(), [
            'user_id' => [function () use ($grammar) {
                return $grammar->user_id;
            }],
        ]);
    }
}
