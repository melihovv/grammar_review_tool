<?php

use App\Entities\User;
use App\Http\Transformers\UserTransformer;
use Dingo\Api\Routing\UrlGenerator;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class UsersControllerTest extends DatabaseTestCase
{
    use DatabaseMigrations;
    use ApiHelpers;

    public function testIndex()
    {
        $users = factory(User::class, 10)->create();

        $route = app(UrlGenerator::class)->version('v1')->route('users.index');

        $this->get($route, $this->headers('v1', $users[0]));

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

        $this->get($route, $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => UserTransformer::attrs(),
        ]);
    }
}
