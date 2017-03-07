<?php

namespace Tests;

use Facebook\WebDriver\Remote\DesiredCapabilities;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Laravel\Dusk\TestCase as BaseTestCase;
use Tests\Browser\Browser;
use Tests\Traits\CreatesApplication;
use Tests\Traits\DbHelpers;

abstract class DuskTestCase extends BaseTestCase
{
    use CreatesApplication;
    use DbHelpers;

    /**
     * Prepare for Dusk test execution.
     *
     * @beforeClass
     *
     * @return void
     */
    public static function prepare()
    {
        static::startChromeDriver();
    }

    protected function newBrowser($driver)
    {
        return new Browser($driver);
    }

    protected function setUp()
    {
        parent::setUp();

        foreach (static::$browsers as $browser) {
            $browser->page = null;
        }
    }

    /**
     * Create the RemoteWebDriver instance.
     *
     * @return \Facebook\WebDriver\Remote\RemoteWebDriver
     */
    protected function driver()
    {
        return RemoteWebDriver::create(
            'http://localhost:9515', DesiredCapabilities::chrome()
        );
    }
}
