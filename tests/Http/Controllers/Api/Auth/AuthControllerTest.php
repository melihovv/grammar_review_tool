<?php

use App\Entities\User;
use App\Http\Transformers\UserTransformer;
use Dingo\Api\Routing\UrlGenerator;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class AuthControllerTest extends TestCase
{
    use DatabaseMigrations;
    use ApiHelpers;

    public function testRegister()
    {
        $route = app(UrlGenerator::class)->version('v1')->route('register');

        $this->post($route, [
            'name' => 'name',
            'email' => 'a@ya.ru',
            'password' => 'secret',
        ], $this->headers());

        $this->seeJsonStructure([
            'data' => UserTransformer::attrs(),
            'meta' => [
                'token',
            ],
        ]);

        $this->seeInDatabase('users', [
            'name' => 'name',
            'email' => 'a@ya.ru',
        ]);
    }

    public function testLogin()
    {
        factory(User::class)->create(['email' => 'a@ya.ru']);

        $route = app(UrlGenerator::class)->version('v1')->route('login');

        $this->post($route, [
            'email' => 'a@ya.ru',
            'password' => 'secret',
        ], $this->headers());

        $this->seeJsonStructure([
            'data' => UserTransformer::attrs(),
            'meta' => [
                'token',
            ],
        ]);
    }

    public function testUser()
    {
        $user = factory(User::class)->create();

        $route = app(UrlGenerator::class)->version('v1')->route('user');

        $this->get($route, $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => UserTransformer::attrs(),
        ]);
    }
}
