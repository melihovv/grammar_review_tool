<?php

namespace Tests\Unit\Http\Controllers\Api;

use App\Entities\Grammar;
use App\Entities\Right;
use App\Entities\User;
use App\Http\Transformers\RightTransformer;
use App\Http\Transformers\UserTransformer;
use Dingo\Api\Routing\UrlGenerator;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\BrowserKitTestCase;
use Tests\Traits\ApiHelpers;

class RightsControllerTest extends BrowserKitTestCase
{
    use DatabaseMigrations;
    use ApiHelpers;

    /**
     * @dataProvider indexProvider
     */
    public function testIndex(callable $setupCb)
    {
        list($user, $grammar) = $setupCb();
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

    public function indexProvider()
    {
        return [
            'user is grammar owner' => [
                function () {
                    $user = factory(User::class)->create();
                    $grammar = factory(Grammar::class)
                        ->create(['user_id' => $user->id]);

                    return [$user, $grammar];
                },
            ],
            'user is admin' => [
                function () {
                    $user = factory(User::class, 'admin')->create();
                    $grammar = factory(Grammar::class)->create();

                    return [$user, $grammar];
                },
            ],
        ];
    }

    /**
     * @dataProvider storeOneRightProvider
     */
    public function testStoreOneRight(callable $setupCb)
    {
        list($user, $grammar) = $setupCb();
        $user2 = factory(User::class)->create();

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.rights.store', [$grammar->id]);

        $this
            ->actingAsApiUser($user)
            ->post($route, [
                'view_comment' => false,
                'edit' => false,
                'admin' => false,
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
            'view_comment' => false,
            'edit' => false,
            'admin' => false,
        ]);
    }

    public function storeOneRightProvider()
    {
        return [
            'user is grammar owner' => [
                function () {
                    $user = factory(User::class)->create();
                    $grammar = factory(Grammar::class)
                        ->create(['user_id' => $user->id]);

                    return [$user, $grammar];
                },
            ],
            'user is admin' => [
                function () {
                    $user = factory(User::class, 'admin')->create();
                    $grammar = factory(Grammar::class)->create();

                    return [$user, $grammar];
                },
            ],
        ];
    }

    /**
     * @dataProvider storeSeveralRightsProvider
     */
    public function testStoreSeveralRights(callable $setupCb)
    {
        list($user, $grammar) = $setupCb();
        $user2 = factory(User::class)->create();
        $user3 = factory(User::class)->create();

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.rights.store', [$grammar->id]);

        $this
            ->actingAsApiUser($user)
            ->post($route, [
                'view_comment' => false,
                'edit' => false,
                'admin' => false,
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
            'view_comment' => false,
            'edit' => false,
            'admin' => false,
        ]);
        $this->seeInDatabase('rights', [
            'user_id' => $user3->id,
            'grammar_id' => $grammar->id,
            'view_comment' => false,
            'edit' => false,
            'admin' => false,
        ]);
    }

    public function storeSeveralRightsProvider()
    {
        return [
            'user is grammar owner' => [
                function () {
                    $user = factory(User::class)->create();
                    $grammar = factory(Grammar::class)
                        ->create(['user_id' => $user->id]);

                    return [$user, $grammar];
                },
            ],
            'user is admin' => [
                function () {
                    $user = factory(User::class, 'admin')->create();
                    $grammar = factory(Grammar::class)->create();

                    return [$user, $grammar];
                },
            ],
            'user has right to admin grammar' => [
                function () {
                    $user = factory(User::class, 'admin')->create();
                    $grammar = factory(Grammar::class)->create();
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view_comment' => false,
                        'edit' => false,
                        'admin' => true,
                    ]);

                    return [$user, $grammar];
                },
            ],
        ];
    }

    /**
     * @dataProvider updateProvider
     */
    public function testUpdate(callable $setupCb)
    {
        list($user, $grammar) = $setupCb();
        $user2 = factory(User::class)->create();
        $right = factory(Right::class)->create([
            'user_id' => $user2->id,
            'grammar_id' => $grammar->id,
            'view_comment' => false,
            'edit' => true,
            'admin' => true,
        ]);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.rights.update', [$grammar->id, $right->id]);

        $this
            ->actingAsApiUser($user)
            ->put($route, [
                'user_id' => $user2->id,
                'view_comment' => false,
                'edit' => false,
                'admin' => false,
            ], $this->headers('v1', $user));

        $this->seeJsonStructure(['data' => RightTransformer::attrs()]);
        $this->seeInDatabase('rights', [
            'user_id' => $user2->id,
            'grammar_id' => $grammar->id,
            'view_comment' => false,
            'edit' => false,
            'admin' => false,
        ]);
    }

    public function updateProvider()
    {
        return [
            'user is grammar owner' => [
                function () {
                    $user = factory(User::class)->create();
                    $grammar = factory(Grammar::class)
                        ->create(['user_id' => $user->id]);

                    return [$user, $grammar];
                },
            ],
            'user is admin' => [
                function () {
                    $user = factory(User::class, 'admin')->create();
                    $grammar = factory(Grammar::class)->create();

                    return [$user, $grammar];
                },
            ],
        ];
    }

    /**
     * @dataProvider destroyProvider
     */
    public function testDestroy(callable $setupCb)
    {
        list($user, $grammar) = $setupCb();
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

    public function destroyProvider()
    {
        return [
            'user is grammar owner' => [
                function () {
                    $user = factory(User::class)->create();
                    $grammar = factory(Grammar::class)
                        ->create(['user_id' => $user->id]);

                    return [$user, $grammar];
                },
            ],
            'user is admin' => [
                function () {
                    $user = factory(User::class, 'admin')->create();
                    $grammar = factory(Grammar::class)->create();

                    return [$user, $grammar];
                },
            ],
        ];
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
            'store: user is not grammar owner' => [
                function ($testCase, $user, $grammar, $right) {
                    $route = app(UrlGenerator::class)->version('v1')
                        ->route('grammars.rights.store', [$grammar->id]);
                    $testCase
                        ->actingAsApiUser($user)
                        ->post($route, [], $this->headers('v1', $user));
                },
            ],
            'update: user is not grammar owner' => [
                function ($testCase, $user, $grammar, $right) {
                    $route = app(UrlGenerator::class)->version('v1')
                        ->route('grammars.rights.update', [$grammar, $right]);
                    $testCase
                        ->actingAsApiUser($user)
                        ->put($route, [], $this->headers('v1', $user));
                },
            ],
            'destroy: user is not grammar owner' => [
                function ($testCase, $user, $grammar, $right) {
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
