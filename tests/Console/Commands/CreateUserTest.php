<?php

namespace Tests\Console\Commands;

use App\Console\Commands\CreateUser;
use App\Entities\User;
use Illuminate\Contracts\Console\Kernel;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class CreateUserTest extends TestCase
{
    use DatabaseMigrations;

    public function testSuccess()
    {
        $this->artisan('create:user', [
            'name' => 'melihovv',
            'email' => 'amelihovv@ya.ru',
            '--password' => 'secret',
            '--admin' => true,
        ]);

        $this->seeInDatabase('users', [
            'name' => 'melihovv',
            'email' => 'amelihovv@ya.ru',
            'is_admin' => true,
        ]);

        $this->assertTrue(Hash::check('secret', User::first()->password));
    }

    public function testUserCanTypePasswordIfItWasNotSpecifiedOnCLI()
    {
        $command = $this->mock(CreateUser::class . '[secret]');
        $command->shouldReceive('secret')->once()->andReturn('secret');

        $this->app[Kernel::class]->registerCommand($command);

        $this->artisan('create:user', [
            'name' => 'melihovv',
            'email' => 'amelihovv@ya.ru',
            '--admin' => true,
        ]);

        $this->seeInDatabase('users', [
            'name' => 'melihovv',
            'email' => 'amelihovv@ya.ru',
            'is_admin' => true,
        ]);

        $this->assertTrue(Hash::check('secret', User::first()->password));
    }
}
