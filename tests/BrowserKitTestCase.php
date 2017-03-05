<?php

namespace Tests;

use Laravel\BrowserKitTesting\TestCase;
use Tests\Traits\CreatesApplication;
use Tests\Traits\DbHelpers;
use Tests\Traits\TestHelpers;

abstract class BrowserKitTestCase extends TestCase
{
    use TestHelpers;
    use DbHelpers;
    use CreatesApplication;

    /**
     * The base URL to use while testing the application.
     *
     * @var string
     */
    protected $baseUrl = 'http://localhost';
}
