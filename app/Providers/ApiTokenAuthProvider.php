<?php

namespace App\Providers;

use Dingo\Api\Contract\Auth\Provider;
use Dingo\Api\Routing\Route;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

class ApiTokenAuthProvider implements Provider
{
    /**
     * @param Request $request
     * @param Route $route
     * @return mixed
     * @throws \Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function authenticate(Request $request, Route $route)
    {
        try {
            return Auth::guard('api')->authenticate();
        } catch (Exception $e) {
            throw new UnauthorizedHttpException(
                'Unable to authenticate with supplied username and password.'
            );
        }
    }
}
