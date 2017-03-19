<?php

namespace Tests\Unit\Http\Controllers\Auth;

use App\Entities\User;
use App\Mail\EmailConfirmation;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Mail;
use Tests\BrowserKitTestCase;

/**
 * @group auth
 */
class RegisterControllerTest extends BrowserKitTestCase
{
    use DatabaseMigrations;

    public function testRegisterSuccess()
    {
        $this->mockCaptcha();

        Mail::fake();

        $this
            ->visit('/register')
            ->see('Register')
            ->type('melihovv', 'name')
            ->type('amelihovv@ya.ru', 'email')
            ->type('password', 'password')
            ->type('password', 'password_confirmation')
            ->press('Register')
            ->seePageIs('/login');

        Mail::assertSent(EmailConfirmation::class, function ($mail) {
            return $mail->hasTo(User::first()->email);
        });
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

        $this->assertRedirectedTo('/login');

        $user = User::first();
        $this->assertFalse($user->is_admin);
    }

    public function testOnlyGuestHasAccess()
    {
        $user = factory(User::class)->create();

        $this
            ->actingAs($user)
            ->visit('/register')
            ->seePageIs('/grammars');
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
}
