<?php

namespace Tests\Unit\Http\Controllers\Auth;

use App\Entities\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\BrowserKitTestCase;

/**
 * @group auth
 */
class ConfirmControllerTest extends BrowserKitTestCase
{
    use DatabaseMigrations;

    public function testConfirm()
    {
        $user = factory(User::class, 'unconfirmed')->create();

        $this->get(route('auth.confirm', $user->email_token));

        $this->assertRedirectedTo('/login');

        $user = User::first();
        $this->assertTrue($user->confirmed);
        $this->assertNull($user->email_token);
    }
}
