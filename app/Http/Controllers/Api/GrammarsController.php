<?php

namespace App\Http\Controllers\Api;

use App\Entities\Grammar;
use App\Http\Requests\Grammar\ShowRequest;
use App\Http\Transformers\DiffTransformer;
use App\Http\Transformers\VersionTransformer;
use App\Services\GrammarService;

class GrammarsController extends ApiController
{
    public function __construct()
    {
        $this->middleware('can:delete,grammar', ['only' => ['destroy']]);
        $this->middleware('can:view,grammar', ['only' => ['show']]);
    }

    /**
     * @param Grammar $grammar
     * @param ShowRequest $request
     *
     * @return \Dingo\Api\Http\Response
     * @SuppressWarnings(PHPMD.UnusedLocalVariable)
     */
    public function show(Grammar $grammar, ShowRequest $request)
    {
        if ($request->has('version')) {
            $version = $grammar->getVersion($request->get('version', 0));
        } else {
            $version = $grammar->getLatestVersion();
        }

        return $this->response->item(
            $version,
            new VersionTransformer(),
            function ($resource, $fractal) {
                $fractal->parseIncludes(['grammar', 'comments']);
            }
        );
    }

    /**
     * @param Grammar $grammar
     *
     * @return \Dingo\Api\Http\Response
     *
     * @SuppressWarnings(PHPMD.UnusedLocalVariable)
     */
    public function versions(Grammar $grammar)
    {
        $grammars = $grammar->versions()
            ->exclude('content')
            ->orderBy('id', 'desc')
            ->get();

        return $this->response->collection(
            $grammars,
            new VersionTransformer(),
            function ($resource, $fractal) {
                $fractal->parseIncludes(['updater']);
            }
        );
    }

    public function diff(
        Grammar $grammar,
        GrammarService $service,
        ShowRequest $request
    ) {
        $diff = $service->diff($grammar, $request->get('version'));

        return $this->response->item(
            (object) [
                'lines' => $diff,
            ],
            new DiffTransformer()
        );
    }
}
