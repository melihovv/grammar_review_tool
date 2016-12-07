<?php

namespace App\Providers;

use Dingo\Api\Auth\Auth;
use Dingo\Api\Auth\Provider\Basic;
use Dingo\Api\Facade\API;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\ServiceProvider;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class DingoServiceProvider extends ServiceProvider
{
    public function boot()
    {
        API::error(function (ModelNotFoundException $e) {
            throw new NotFoundHttpException(null, $e);
        });

        API::error(function (AuthorizationException $e) {
            throw new AccessDeniedHttpException($e->getMessage(), $e);
        });

        app(Auth::class)->extend('basic', function ($app) {
            return new Basic($app['auth'], 'email');
        });
    }

    public function register()
    {
    }
}
