<?php

namespace App\Http\Controllers\Api;

use App\Entities\Grammar;
use App\Entities\User;
use App\Http\Requests\User\UserFindRequest;
use App\Http\Transformers\UserTransformer;
use App\Services\UserService;

class UsersController extends ApiController
{
    public function index()
    {
        $users = User::all();

        return $this->response->collection($users, new UserTransformer());
    }

    public function show(User $user)
    {
        return $this->response->item($user, new UserTransformer());
    }

    public function find(
        Grammar $grammar,
        UserFindRequest $request,
        UserService $service
    ) {
        $users = $service->findUsersWhichDontHaveRightsOnGrammar(
            $grammar,
            $request->get('query')
        );

        return $this->response->collection($users, new UserTransformer());
    }
}
