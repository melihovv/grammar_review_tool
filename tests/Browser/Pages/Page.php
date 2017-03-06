<?php

namespace Tests\Browser\Pages;

use Laravel\Dusk\Browser;
use Laravel\Dusk\Page as BasePage;

abstract class Page extends BasePage
{
    protected $url;

    public function __construct($url = null)
    {
        $this->url = $url;
    }

    public function url()
    {
        return $this->url;
    }

    public function assert(Browser $browser)
    {
        parent::assert($browser);

        $browser->assertPathIs(parse_url($this->url(), PHP_URL_PATH));
    }

    /**
     * Get the global element shortcuts for the site.
     *
     * @return array
     */
    public static function siteElements()
    {
        return [
            '@create-new-button' => '.navbar-right .dropdown:first-child .dropdown-toggle:first-child',
            '@profile-dropdown' => '.navbar-right .dropdown:nth-child(2) .dropdown-toggle:first-child',
        ];
    }

    public function modalIsDisplayed(Browser $browser)
    {
        $modal = $browser->element('.modal-content');

        return $modal && $modal->isDisplayed();
    }
}
