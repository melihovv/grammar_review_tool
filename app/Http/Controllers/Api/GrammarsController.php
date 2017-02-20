<?php

namespace App\Http\Controllers\Api;

use App\Entities\Grammar;
use App\Http\Requests\Grammar\GrammarStoreRequest;
use App\Http\Transformers\DiffTransformer;
use App\Http\Transformers\GrammarTransformer;
use App\Services\GrammarService;

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
                $fractal->parseIncludes(['owner', 'comments', 'rights']);
            }
        );
    }

    public function destroy(Grammar $grammar)
    {
        $grammar->delete();

        return $this->response->noContent();
    }

    public function allVersions(Grammar $grammar)
    {
        $root = $grammar->getRoot();
        $allVersions = $root->descendantsAndSelf()->exclude('content')->get();
        $allVersions = $allVersions->reverse();

        return $this->response->collection(
            $allVersions,
            new GrammarTransformer(),
            [],
            function ($resource, $fractal) {
                $fractal->parseIncludes(['updater']);
            }
        );
    }

    public function diff(Grammar $grammar, GrammarService $service)
    {
        $diff = $service->diff($grammar);

        return $this->response->item(
            (object) [
                'lines' => $diff,
            ],
            new DiffTransformer()
        );
    }
}
