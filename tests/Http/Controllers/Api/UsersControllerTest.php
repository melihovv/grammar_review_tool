<?php

namespace Tests\Http\Controllers\Api;

use App\Entities\User;
use App\Http\Transformers\UserTransformer;
use Dingo\Api\Routing\UrlGenerator;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\ApiHelpers;
use Tests\TestCase;

class UsersControllerTest extends TestCase
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
}
