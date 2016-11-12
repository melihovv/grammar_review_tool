<?php

namespace App\Http\Controllers\Api;

use App\Entities\Grammar;
use App\Http\Requests\GrammarRequest;
use App\Http\Transformers\GrammarTransformer;

class GrammarsController extends ApiController
{
    public function index()
    {
        $grammars = Grammar::paginate(10);

        return $this->response->paginator($grammars, new GrammarTransformer());
    }

    public function store(GrammarRequest $request)
    {
        $grammar = Grammar::create($request->all());

        return $this->response->item($grammar, new GrammarTransformer());
    }

    public function show(Grammar $grammar)
    {
        return $this->response->item($grammar, new GrammarTransformer());
    }

    public function update(Grammar $grammar, GrammarRequest $request)
    {
        $grammar->update($request->all());

        return $this->response->item($grammar, new GrammarTransformer());
    }

    public function destroy(Grammar $grammar)
    {
        $grammar->delete();

        return $this->response->noContent();
    }
}
