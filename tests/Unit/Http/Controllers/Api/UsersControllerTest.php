<?php

namespace Tests\Unit\Http\Controllers\Api;

use App\Entities\Grammar;
use App\Entities\Right;
use App\Entities\User;
use App\Http\Transformers\UserTransformer;
use Dingo\Api\Routing\UrlGenerator;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\BrowserKitTestCase;
use Tests\Traits\ApiHelpers;

class UsersControllerTest extends BrowserKitTestCase
{
    use DatabaseMigrations;
    use ApiHelpers;

    public function testIndex()
    {
        $users = factory(User::class, 10)->create();

        $route = app(UrlGenerator::class)->version('v1')->route('users.index');

        $this
            ->actingAsApiUser($users[0])
            ->get($route, $this->headers('v1', $users[0]));

        $this->seeJsonStructure([
            'data' => [
                '*' => UserTransformer::attrs(),
            ],
        ]);
    }

    public function testShow()
    {
        $user = factory(User::class)->create();

        $route = app(UrlGenerator::class)->version('v1')
            ->route('users.show', [$user->id]);

        $this
            ->actingAsApiUser($user)
            ->get($route, $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => UserTransformer::attrs(),
        ]);
    }

    public function testFind()
    {
        $users = factory(User::class, 10)->create();

        factory(User::class)->create(['name' => 'Alfred Bah']);
        factory(User::class)->create(['email' => 'alfred@mail.ru']);

        $owner = $users[0];
        $grammar = factory(Grammar::class)->create(['user_id' => $owner->id]);

        $userWithRight = factory(User::class)->create([
            'email' => 'alfred2@mail.ru',
        ]);
        factory(Right::class)->create([
            'grammar_id' => $grammar->id,
            'user_id' => $userWithRight->id,
        ]);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('users.find', ['grammar' => $grammar, 'query' => 'alfred']);

        $this
            ->actingAsApiUser($owner)
            ->get($route, $this->headers('v1', $owner));

        $this->seeJsonStructure([
            'data' => [
                '*' => UserTransformer::attrs(),
            ],
        ]);

        $this->seeJson([
            'name' => 'Alfred Bah',
        ]);

        $this->seeJson([
            'email' => 'alfred@mail.ru',
        ]);
    }
}
