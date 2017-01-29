<?php

namespace App\Services;

use App\Entities\User;

class UserService
{
    /**
     * Create user.
     *
     * @param array $data
     *
     * @return User
     */
    public function create(array $data)
    {
        return User::create(array_merge([
            'api_token' => str_random(60),
            'email_token' => str_random(10),
        ], $data, [
            'password' => bcrypt($data['password']),
        ]));
    }
}
