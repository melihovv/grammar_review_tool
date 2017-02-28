<?php

namespace App\Http\Controllers\Api;

use App\Entities\Grammar;
use App\Entities\Right;
use App\Http\Requests\Right\StoreRequest;
use App\Http\Requests\Right\UpdateRequest;
use App\Http\Transformers\RightTransformer;
use App\Services\RightService;

class RightsController extends ApiController
{
    public function __construct()
    {
        $this->middleware('can:manageRights,grammar');
    }

    public function index(Grammar $grammar)
    {
        return $this->response->collection(
            $grammar->rights,
            new RightTransformer()
        );
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function store(
        Grammar $grammar,
        StoreRequest $request,
        RightService $service
    ) {
        $rights = $service->create(
            $grammar,
            $request->get('users'),
            $request->only(['view', 'comment', 'edit', 'admin'])
        );

        return $this->response->collection($rights, new RightTransformer());
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function update(
        Grammar $grammar,
        Right $right,
        UpdateRequest $request
    ) {
        $right->update($request->all());

        return $this->response->item($right, new RightTransformer());
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function destroy(Grammar $grammar, Right $right)
    {
        $right->delete();

        return $this->response->noContent();
    }
}
