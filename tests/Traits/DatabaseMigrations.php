<?php

namespace Tests\Traits;

use Illuminate\Contracts\Console\Kernel;

trait DatabaseMigrations
{
    use \Illuminate\Foundation\Testing\DatabaseMigrations;

    /**
     * Define hooks to migrate the database before and after each test.
     *
     * @return void
     */
    public function runDatabaseMigrations()
    {
        $this->artisan('migrate');

        $this->app[Kernel::class]->setArtisan(null);
    }
}
