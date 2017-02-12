<?php

namespace Tests\Http\Controllers\Api;

use App\Entities\Grammar;
use App\Entities\Right;
use App\Entities\User;
use App\Http\Transformers\RightTransformer;
use App\Http\Transformers\UserTransformer;
use Dingo\Api\Routing\UrlGenerator;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\ApiHelpers;
use Tests\TestCase;

class RightsControllerTest extends TestCase
{
    use DatabaseMigrations;
    use ApiHelpers;

    public function testIndex()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create(['user_id' => $user->id]);
        factory(Right::class, 10)->create([
            'grammar_id' => $grammar->id,
        ]);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.rights.index', $grammar->id);

        $this
            ->actingAsApiUser($user)
            ->get($route, $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => [
                '*' => array_merge(
                    RightTransformer::attrs(),
                    [
                        'user' => ['data' => UserTransformer::attrs()],
                    ]
                ),
            ],
        ]);
    }

    public function testStoreOneRight()
    {
        $user = factory(User::class)->create();
        $user2 = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create(['user_id' => $user->id]);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.rights.store', [$grammar->id]);

        $this
            ->actingAsApiUser($user)
            ->post($route, [
                'comment' => true,
                'view' => false,
                'users' => [$user2->id],
            ], $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => [
                '*' => RightTransformer::attrs(),
            ],
        ]);
        $this->seeInDatabase('rights', [
            'user_id' => $user2->id,
            'grammar_id' => $grammar->id,
            'comment' => true,
            'view' => false,
        ]);
    }

    public function testStoreSeveralRights()
    {
        $user = factory(User::class)->create();
        $user2 = factory(User::class)->create();
        $user3 = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create(['user_id' => $user->id]);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.rights.store', [$grammar->id]);

        $this
            ->actingAsApiUser($user)
            ->post($route, [
                'comment' => true,
                'view' => false,
                'users' => [$user2->id, $user3->id],
            ], $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => [
                '*' => RightTransformer::attrs(),
            ],
        ]);

        $this->seeInDatabase('rights', [
            'user_id' => $user2->id,
            'grammar_id' => $grammar->id,
            'comment' => true,
            'view' => false,
        ]);
        $this->seeInDatabase('rights', [
            'user_id' => $user3->id,
            'grammar_id' => $grammar->id,
            'comment' => true,
            'view' => false,
        ]);
    }

    public function testUpdate()
    {
        $user = factory(User::class)->create();
        $user2 = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create(['user_id' => $user->id]);
        $right = factory(Right::class)->create([
            'user_id' => $user2->id,
            'grammar_id' => $grammar->id,
            'view' => false,
            'comment' => true,
        ]);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.rights.update', [$grammar->id, $right->id]);

        $this
            ->actingAsApiUser($user)
            ->put($route, [
                'user_id' => $user2->id,
                'view' => false,
                'comment' => false,
            ], $this->headers('v1', $user));

        $this->seeJsonStructure(['data' => RightTransformer::attrs()]);
        $this->seeInDatabase('rights', [
            'user_id' => $user2->id,
            'grammar_id' => $grammar->id,
            'view' => false,
            'comment' => false,
        ]);
    }

    public function testDestroy()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create(['user_id' => $user->id]);
        $right = factory(Right::class)->create();

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.rights.destroy', [$grammar->id, $right->id]);

        $this
            ->actingAsApiUser($user)
            ->delete($route, [], $this->headers('v1', $user));

        $this->assertResponseStatus(204);
        $this->notSeeInDatabase('rights', [
            'id' => $right->id,
        ]);
    }

    /**
     * @dataProvider unauthorizedProvider
     */
    public function testUnauthorized($cb)
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();
        $right = factory(Right::class)->create();

        $cb($this, $user, $grammar, $right);

        $this->assertResponseStatus(403);
    }

    public function unauthorizedProvider()
    {
        return [
            'store: user is admin' => [
                function ($testCase, $user, $grammar, $right) {
                    $user->update(['is_admin' => true]);

                    $route = app(UrlGenerator::class)->version('v1')
                        ->route('grammars.rights.store', [$grammar->id]);
                    $testCase
                        ->actingAsApiUser($user)
                        ->post($route, [], $this->headers('v1', $user));
                },
            ],
            'store: user is not grammar owner' => [
                function ($testCase, $user, $grammar, $right) {
                    $user->update(['is_admin' => true]);

                    $route = app(UrlGenerator::class)->version('v1')
                        ->route('grammars.rights.store', [$grammar->id]);
                    $testCase
                        ->actingAsApiUser($user)
                        ->post($route, [], $this->headers('v1', $user));
                },
            ],
            'update: user is admin' => [
                function ($testCase, $user, $grammar, $right) {
                    $user->update(['is_admin' => true]);

                    $route = app(UrlGenerator::class)->version('v1')
                        ->route('grammars.rights.update', [$grammar, $right]);
                    $testCase
                        ->actingAsApiUser($user)
                        ->put($route, [], $this->headers('v1', $user));
                },
            ],
            'update: user is not grammar owner' => [
                function ($testCase, $user, $grammar, $right) {
                    $user->update(['is_admin' => true]);

                    $route = app(UrlGenerator::class)->version('v1')
                        ->route('grammars.rights.update', [$grammar, $right]);
                    $testCase
                        ->actingAsApiUser($user)
                        ->put($route, [], $this->headers('v1', $user));
                },
            ],
            'destroy: user is admin' => [
                function ($testCase, $user, $grammar, $right) {
                    $user->update(['is_admin' => true]);

                    $route = app(UrlGenerator::class)->version('v1')
                        ->route('grammars.rights.destroy', [$grammar, $right]);
                    $testCase
                        ->actingAsApiUser($user)
                        ->delete($route, [], $this->headers('v1', $user));
                },
            ],
            'destroy: user is not grammar owner' => [
                function ($testCase, $user, $grammar, $right) {
                    $user->update(['is_admin' => true]);

                    $route = app(UrlGenerator::class)->version('v1')
                        ->route('grammars.rights.destroy', [$grammar, $right]);
                    $testCase
                        ->actingAsApiUser($user)
                        ->delete($route, [], $this->headers('v1', $user));
                },
            ],
        ];
    }
}
