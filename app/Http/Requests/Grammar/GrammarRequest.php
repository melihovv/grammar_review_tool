<?php

namespace App\Http\Requests\Grammar;

use App\Http\Requests\Request;
use Dingo\Api\Auth\Auth;

abstract class GrammarRequest extends Request
{
    public function rules()
    {
        return array_merge(parent::rules(), [
            'name' => 'required|string|max:255',
            'content' => 'required|string|max:65535',
            'public_view' => 'required|boolean',
            'allow_to_comment' => 'required|boolean',
        ]);
    }

    public function additionalInput()
    {
        return array_merge(parent::additionalInput(), [
            'user_id' => 0,
        ]);
    }

    public function sanitizers()
    {
        return array_merge(parent::sanitizers(), [
            'user_id' => [function () {
                return app(Auth::class)->user()->id;
            }],
            'name' => 'trim',
            'content' => 'trim',
        ]);
    }
}
