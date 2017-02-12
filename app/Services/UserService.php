<?php

namespace App\Services;

use App\Entities\Grammar;
use App\Entities\User;
use Illuminate\Database\Eloquent\Collection;

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

    /**
     * @param Grammar $grammar
     * @param $query
     * @return Collection
     */
    public function findUsersWhichDontHaveRightsOnGrammar(
        Grammar $grammar,
        $query
    ) {
        $excludeIds = $grammar->rights()->pluck('user_id')->toArray();
        $excludeIds[] = $grammar->user_id;

        return User::where('name', 'LIKE', "%$query%")
            ->orWhere('email', 'LIKE', "%$query%")
            ->whereNotIn('id', $excludeIds)
            ->get();
    }
}
