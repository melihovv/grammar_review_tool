<?php

namespace App\Http\Requests;

use Dingo\Api\Auth\Auth;

class GrammarRequest extends Request
{
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'content' => 'required|string|max:65535',
            'public_view' => 'required|boolean',
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
