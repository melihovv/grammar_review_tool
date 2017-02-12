<?php

namespace Tests;

use Illuminate\Contracts\Console\Kernel;
use Illuminate\Foundation\Testing\TestCase as IlluminateTestCase;
use Illuminate\Support\Facades\Hash;
use Tests\Traits\CreatesApplication;
use Tests\Traits\TestHelpers;

abstract class TestCase extends IlluminateTestCase
{
    use TestHelpers;
    use CreatesApplication;
}
