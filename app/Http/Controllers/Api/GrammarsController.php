<?php

namespace App\Http\Controllers\Api;

use App\Entities\Grammar;
use App\Http\Requests\Grammar\GrammarStoreRequest;
use App\Http\Requests\Grammar\GrammarUpdateRequest;
use App\Http\Transformers\GrammarTransformer;

class GrammarsController extends ApiController
{
    public function index()
    {
        $grammars = Grammar::paginate(10);

        return $this->response->paginator($grammars, new GrammarTransformer());
    }

    public function store(GrammarStoreRequest $request)
    {
        $grammar = Grammar::create($request->all());

        return $this->response->item($grammar, new GrammarTransformer());
    }

    public function show(Grammar $grammar)
    {
        return $this->response->item($grammar, new GrammarTransformer());
    }

    public function update(Grammar $grammar, GrammarUpdateRequest $request)
    {
        // TODO policies.
        $grammar->update($request->all());

        return $this->response->item($grammar, new GrammarTransformer());
    }

    public function destroy(Grammar $grammar)
    {
        // TODO policies.
        $grammar->delete();

        return $this->response->noContent();
    }
}
