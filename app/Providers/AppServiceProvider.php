<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
    }

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
