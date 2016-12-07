<?php

namespace App\Http\Controllers\Api;

use App\Entities\Grammar;
use App\Entities\Right;
use App\Http\Requests\Right\RightStoreRequest;
use App\Http\Requests\Right\RightUpdateRequest;

class RightsController extends ApiController
{
    public function __construct()
    {
        $this->middleware('can:manageRights,grammar');
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function store(Grammar $grammar, RightStoreRequest $request)
    {
        Right::create($request->all());

        return $this->response->noContent();
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

        return $this->response->noContent();
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
