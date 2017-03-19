<?php

namespace Tests\Unit\Http\Controllers\Auth;

use App\Entities\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Lang;
use Tests\BrowserKitTestCase;

/**
 * @group auth
 */
class LoginControllerTest extends BrowserKitTestCase
{
    use DatabaseMigrations;

    public function testLoginNotValidEmail()
    {
        $this->mockCaptcha();

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
        $this->mockCaptcha();

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
        $this->mockCaptcha();
        $user = factory(User::class)->create();

        $this
            ->visit('/')
            ->see('Login')
            ->type($user->email, 'email')
            ->type('secret', 'password')
            ->check('remember')
            ->press('Login')
            ->dontSee(Lang::get('auth.failed'))
            ->seePageIs('/grammars');
    }

    public function testLoginUnconfirmed()
    {
        $this->mockCaptcha();
        $user = factory(User::class, 'unconfirmed')->create();

        $this
            ->visit('/')
            ->see('Login')
            ->type($user->email, 'email')
            ->type('secret', 'password')
            ->check('remember')
            ->press('Login')
            ->see(Lang::get('auth.email_not_confirmed'));
    }

    public function testOnlyGuestHasAccess()
    {
        $user = factory(User::class)->create();

        $this
            ->actingAs($user)
            ->visit('/login')
            ->seePageIs('/grammars');
    }
}
