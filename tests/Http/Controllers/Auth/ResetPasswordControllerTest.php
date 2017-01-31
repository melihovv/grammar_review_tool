<?php

namespace Tests\Http\Controllers\Auth;

use App\Entities\User;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;
use Tests\TestCase;

class ResetPasswordControllerTest extends TestCase
{
    use DatabaseMigrations;

    public function testSuccess()
    {
        $user = factory(User::class)->create();
        $token = str_random(10);

        DB::table('password_resets')->insert([
            'email' => $user->email,
            'token' => $token,
        ]);

        $this
            ->visit("/password/reset/$token")
            ->see('Reset password')
            ->type($user->email, 'email')
            ->type('secret', 'password')
            ->type('secret', 'password_confirmation')
            ->press('Reset Password')
            ->seePageIs('/home');
    }
}
