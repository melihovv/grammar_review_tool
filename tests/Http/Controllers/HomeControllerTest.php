<?php

use App\Entities\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class HomeControllerTest extends DatabaseTestCase
{
    use DatabaseTransactions;

    public function testIndex()
    {
        $user = factory(User::class)->create();

        $this
            ->actingAs($user)
            ->get(route('home.index'));

        $this->assertResponseOk();
    }
}
