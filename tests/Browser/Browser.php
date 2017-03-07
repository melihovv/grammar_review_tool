<?php

namespace Tests\Browser;

use Closure;

class Browser extends \Laravel\Dusk\Browser
{
    /**
     * @var bool
     */
    protected $insideWith = false;

    /**
     * @param \Facebook\WebDriver\Remote\RemoteWebDriver $driver
     * @param ElementResolver                            $resolver
     */
    public function __construct($driver, $resolver = null)
    {
        parent::__construct($driver, $resolver ?: new ElementResolver($driver));
    }

    public function click($selector)
    {
        $this->resolver->findOrFail($selector)->click();

        return $this;
    }

    public function waitFor($selector, $seconds = 5)
    {
        $message = is_string($selector)
            ? "Waited {$seconds} seconds for selector [{$selector}]."
            : "Waited {$seconds} seconds for selector [{$selector->getValue()}].";

        return $this->waitUsing($seconds, 100, function () use ($selector) {
            return $this->resolver->findOrFail($selector)->isDisplayed();
        }, $message);
    }

    public function with($selector, Closure $callback)
    {
        $browser = new static(
            $this->driver,
            new ElementResolver(
                $this->driver,
                is_string($selector)
                    ? $this->resolver->format($selector)
                    : ''
            )
        );

        $browser->insideWith = true;

        if ($this->page) {
            $browser->on($this->page);
        }

        $browser->insideWith = false;

        call_user_func($callback, $browser);

        return $this;
    }

    public function on($page)
    {
        $this->page = $page;

        if (!$this->insideWith) {
            $page->assert($this);
        }

        $this->resolver->pageElements(array_merge(
            $page::siteElements(), $page->elements()
        ));

        return $this;
    }
}
