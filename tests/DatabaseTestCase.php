<?php

abstract class DatabaseTestCase extends TestCase
{
    /**
     * The Illuminate application instance.
     *
     * @var \Illuminate\Foundation\Application
     */
    protected static $application = null;

    /**
     * @var string
     */
    protected $seederClass = DatabaseSeeder::class;

    /**
     * Creates the application.
     *
     * @return \Illuminate\Foundation\Application
     */
    public function createApplication()
    {
        if (static::$application !== null) {
            return static::$application;
        }

        $app = require __DIR__.'/../bootstrap/app.php';
        $app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

        Artisan::call('migrate');
        Artisan::call('db:seed', ['--class' => $this->seederClass]);

        static::$application = $app;

        return $app;
    }

    /**
     * Clean up the testing environment before the next test.
     *
     * @return void
     */
    protected function tearDown()
    {
        if ($this->app) {
            foreach ($this->beforeApplicationDestroyedCallbacks as $callback) {
                call_user_func($callback);
            }
        }

        $this->setUpHasRun = false;

        if (property_exists($this, 'serverVariables')) {
            $this->serverVariables = [];
        }

        if (class_exists('Mockery')) {
            Mockery::close();
        }

        $this->afterApplicationCreatedCallbacks = [];
        $this->beforeApplicationDestroyedCallbacks = [];
    }
}