<?php

namespace Tests\Unit\Http\Controllers\Auth;

use App\Entities\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Password;
use Tests\BrowserKitTestCase;

/**
 * @group auth
 */
class ResetPasswordControllerTest extends BrowserKitTestCase
{
    use DatabaseMigrations;

    public function testSuccess()
    {
        $user = factory(User::class)->create();
        $token = Password::getRepository()->create($user);

        $this
            ->visit("/password/reset/$token")
            ->see('Reset password')
            ->type($user->email, 'email')
            ->type('secret', 'password')
            ->type('secret', 'password_confirmation')
            ->press('Reset Password')
            ->seePageIs('/grammars');
    }
}
