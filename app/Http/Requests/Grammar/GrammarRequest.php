<?php

namespace App\Http\Requests\Grammar;

use App\Http\Requests\Request;
use Dingo\Api\Auth\Auth;

abstract class GrammarRequest extends Request
{
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'content' => 'required|string|max:65535',
            'public_view' => 'required|boolean',
            'allow_to_comment' => 'required|boolean',
        ];
    }

    public function sanitizers()
    {
        return [
            'name' => 'trim',
        ];
    }

    public function all()
    {
        return array_merge(parent::all(), [
            'owner' => app(Auth::class)->user()->id,
        ]);
    }
}
