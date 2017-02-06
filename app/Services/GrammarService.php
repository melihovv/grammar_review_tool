<?php

namespace App\Services;

use App\Entities\Grammar;
use App\Http\Requests\Request;
use Illuminate\Support\Facades\Auth;

class GrammarService
{
    /**
     * @param Request $request
     */
    public function update(Grammar $grammar, Request $request)
    {
        $params = ['allow_to_comment'];

        if (Auth::user()->isGrammarOwner($grammar)) {
            $params = ['public_view', 'allow_to_comment'];
        }

        $grammar->update($request->only($params));
    }
}
