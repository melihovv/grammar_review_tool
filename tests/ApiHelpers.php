<?php

use App\Entities\User;

trait ApiHelpers
{
    /**
     * Return request headers needed to interact with the API.
     * @param string $version
     * @param User $user
     * @return array Array of headers.
     */
    protected function headers($version = 'v1', User $user = null)
    {
        $standardsTree = config('api.standardsTree');
        $subtype = config('api.subtype');

        $headers = [
            'Accept' => "application/$standardsTree.$subtype.$version+json",
        ];

        if (!is_null($user)) {
            $token = JWTAuth::fromUser($user);
            JWTAuth::setToken($token);
            $headers['Authorization'] = 'Bearer ' . $token;
        }

        return $headers;
    }
}
