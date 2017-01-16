<?php

namespace App\Http\Controllers\Api;

use App\Entities\Grammar;
use App\Http\Requests\Grammar\GrammarStoreRequest;
use App\Http\Transformers\GrammarTransformer;

class GrammarsController extends ApiController
{
    public function __construct()
    {
        $this->middleware('can:delete,grammar', ['only' => ['destroy']]);
        $this->middleware('can:view,grammar', ['only' => ['show']]);
    }

    public function index()
    {
        $grammars = $this->auth->user()->availableGrammars()->paginate(10);

        return $this->response->paginator($grammars, new GrammarTransformer());
    }

    public function store(GrammarStoreRequest $request)
    {
        $grammar = Grammar::create($request->all());

        return $this->response->item($grammar, new GrammarTransformer());
    }

    /**
     * @param Grammar $grammar
     *
     * @return \Dingo\Api\Http\Response
     * @SuppressWarnings(PHPMD.UnusedLocalVariable)
     */
    public function show(Grammar $grammar)
    {
        return $this->response->item(
            $grammar,
            new GrammarTransformer(),
            [],
            function ($resource, $fractal) {
                $fractal->parseIncludes(['owner', 'comments']);
            }
        );
    }

    public function destroy(Grammar $grammar)
    {
        $grammar->delete();

        return $this->response->noContent();
    }
}
