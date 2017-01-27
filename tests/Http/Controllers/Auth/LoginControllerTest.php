<?php

namespace Tests\Http\Controllers\Auth;

use App\Entities\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Lang;
use Tests\TestCase;

class LoginControllerTest extends TestCase
{
    use DatabaseMigrations;

    public function testLoginNotValidEmail()
    {
        $this
            ->visit('/')
            ->see('Login')
            ->type('notEmail', 'email')
            ->type('invalid-password', 'password')
            ->check('remember')
            ->press('Login')
            ->seePageIs('/login')
            ->see(Lang::get('validation.email', ['attribute' => 'email']));
    }

    public function testLoginNotExistingCredentials()
    {
        $this
            ->visit('/')
            ->see('Login')
            ->type('not-exist@ya.ru', 'email')
            ->type('invalid-password', 'password')
            ->check('remember')
            ->press('Login')
            ->seePageIs('/login')
            ->see(Lang::get('auth.failed'));
    }

    public function testLoginSuccess()
    {
        $user = factory(User::class)->create();

        $this
            ->visit('/')
            ->see('Login')
            ->type($user->email, 'email')
            ->type('secret', 'password')
            ->check('remember')
            ->press('Login')
            ->dontSee(Lang::get('auth.failed'))
            ->seePageIs('/home');
    }

    public function testLoginOnlyGuestHasAccess()
    {
        $user = factory(User::class)->create();

        $this
            ->actingAs($user)
            ->visit('/login')
            ->seePageIs('/home');
    }
}
