<?php

namespace App\Providers;

use Fadion\Sanitizer\Sanitizer;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;
use Laravel\Dusk\Browser;
use PHPUnit_Framework_Assert as PHPUnit;

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

        Browser::macro('dontSeeElement', function ($selector) {
            $elem = $this->resolver->find($selector);

            PHPUnit::assertNull(
                $elem,
                "Element with select [$selector] is presented on the page"
            );

            return $this;
        });

        Browser::macro('assertHighlightedLineIs', function ($line) {
            $this->ensurejQueryIsAvailable();

            $script = <<<'HERE'
                return jQuery('.symbol-search__found-symbol')
                    .closest('.grammar-view__row')
                    .attr('data-row');
HERE;

            $actualLine = $this->driver->executeScript($script);

            PHPUnit::assertEquals(
                $line,
                $actualLine,
                "Highlited line [$actualLine], but expected [$line]."
            );

            return $this;
        });

        Browser::macro('assertElementsCount', function ($selector, $count) {
            $elems = $this->elements($selector);

            PHPUnit::assertCount($count, $elems);

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
