<?php

namespace App\Providers;

use Dingo\Api\Facade\API;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\ServiceProvider;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     * @throws NotFoundHttpException
     */
    public function boot()
    {
        API::error(function (ModelNotFoundException $e) {
            throw new NotFoundHttpException(null, $e);
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if (!$this->app->environment('production')) {
            $localProviders = config('app.local_providers', []);
            foreach ($localProviders as $provider) {
                $this->app->register($provider);
            }

            $localAliases = config('app.local_aliases', []);
            foreach ($localAliases as $alias => $class) {
                $this->app->alias($class, $alias);
            }
        }
    }
}
