<?php

namespace App\Providers;

use Fadion\Sanitizer\Sanitizer;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;
use Laravel\Dusk\Browser;

class AppServiceProvider extends ServiceProvider
{
    /**
     * @SuppressWarnings(PHPMD.UnusedLocalVariable)
     */
    public function boot()
    {
        Sanitizer::register('remove_cr', function ($value) {
            return str_replace("\r", '', $value);
        });

        Validator::extend(
            'belongs_to_grammar',
            function ($attribute, $value, $params) {
                $grammar = Request::route('grammar');

                if ($params[0] === 'id') {
                    return $grammar->hasVersionWithId($value);
                } elseif ($params[0] === 'version') {
                    return $grammar->hasVersion($value);
                }

                return false;
            }
        );

        Browser::macro('seeElement', function ($selector) {
            $this->resolver->findOrFail($selector);

            return $this;
        });
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
