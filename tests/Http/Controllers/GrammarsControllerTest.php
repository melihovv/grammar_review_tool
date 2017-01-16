<?php

namespace Tests\Http\Controllers;

use App\Entities\Grammar;
use App\Entities\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Pagination\LengthAwarePaginator;
use Tests\TestCase;

class GrammarsControllerTest extends TestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    public function testIndex()
    {
        $user = factory(User::class)->create();
        factory(Grammar::class, 10)->create();

        $this
            ->actingAs($user)
            ->get(route('grammars.index'));

        $this->assertResponseOk();
        $this->assertViewHas('grammars');

        $grammars = $this->response->original->getData()['grammars'];
        $this->assertInstanceOf(LengthAwarePaginator::class, $grammars);
    }

    public function testShow()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create(['user_id' => $user->id]);

        $this
            ->actingAs($user)
            ->get(route('grammars.show', $grammar->id));

        $this->assertResponseOk();
        $this->assertViewHas('grammar');
    }
}
