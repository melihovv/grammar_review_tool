<?php

namespace Tests\Http\Controllers\Auth;

use App\Entities\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Lang;
use Tests\TestCase;

class RegisterControllerTest extends TestCase
{
    use DatabaseMigrations;

    public function testRegisterSuccess()
    {
        $this->expectsEvents(Registered::class);
        $this->mockCaptcha();

        $this
            ->visit('/register')
            ->see('Register')
            ->type('melihovv', 'name')
            ->type('amelihovv@ya.ru', 'email')
            ->type('password', 'password')
            ->type('password', 'password_confirmation')
            ->press('Register')
            ->seePageIs('/register');
    }

    public function testRegisterUserAttemptsToRegisterAsAdmin()
    {
        $this->expectsEvents(Registered::class);
        $this->mockCaptcha();

        $this->post('/register', [
            'name' => 'melihovv',
            'email' => 'am@ya.ru',
            'password' => 'secret',
            'password_confirmation' => 'secret',
            'g-recaptcha-response' => 'captcha',
            'is_admin' => true,
        ], [
            'HTTP_REFERER' => url('/register'),
        ]);

        $this->assertRedirectedTo('/register');

        $user = User::first();
        $this->assertFalse($user->is_admin);
    }

    public function testOnlyGuestHasAccess()
    {
        $user = factory(User::class)->create();

        $this
            ->actingAs($user)
            ->visit('/register')
            ->seePageIs('/home');
    }

    public function testRegisterDuplicateName()
    {
        $user = factory(User::class)->create();

        $this
            ->visit('/register')
            ->see('Register')
            ->type($user->name, 'name')
            ->type('amelihovv@ya.ru', 'email')
            ->type('password', 'password')
            ->type('password', 'password_confirmation')
            ->press('Register')
            ->seePageIs('/register')
            ->see(Lang::get('validation.unique', ['attribute' => 'name']));
    }

    public function testConfirm()
    {
        $user = factory(User::class, 'unconfirmed')->create();

        $this->get(route('register.confirm', $user->email_token));

        $this->assertRedirectedTo('/login');

        $user = User::first();
        $this->assertTrue($user->confirmed);
        $this->assertNull($user->email_token);
    }
}
