<?php

namespace Tests\Unit\Http\Controllers\Auth;

use App\Entities\User;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;
use Tests\BrowserKitTestCase;

/**
 * @group auth
 */
class ForgotPasswordControllerTest extends BrowserKitTestCase
{
    use DatabaseMigrations;

    public function testSuccess()
    {
        $user = factory(User::class)->create();

        Notification::fake();

        $this
            ->visit('/password/reset')
            ->see('Reset password')
            ->type($user->email, 'email')
            ->press('Send Password Reset Link')
            ->seePageIs('/password/reset')
            ->see('We have e-mailed your password reset link!');

        Notification::assertSentTo([$user], ResetPassword::class);

        $row = DB::table('password_resets')->first();
        $this->assertEquals($user->email, $row->email);
    }
}
