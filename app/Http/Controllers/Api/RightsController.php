<?php

namespace App\Http\Controllers\Api;

use App\Entities\Grammar;
use App\Entities\Right;
use App\Http\Requests\Right\RightStoreRequest;
use App\Http\Requests\Right\RightUpdateRequest;
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
        RightStoreRequest $request,
        RightService $service
    ) {
        $rights = $service->create(
            $grammar,
            $request->get('users'),
            $request->get('view'),
            $request->get('comment')
        );

        return $this->response->collection(
            collect($rights),
            new RightTransformer()
        );
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function update(
        Grammar $grammar,
        Right $right,
        RightUpdateRequest $request
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
