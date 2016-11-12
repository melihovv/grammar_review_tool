<?php

namespace App\Http\Controllers\Api;

use App\Entities\User;
use App\Http\Transformers\UserTransformer;

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
}
