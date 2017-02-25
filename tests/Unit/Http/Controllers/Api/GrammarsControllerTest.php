<?php

namespace Tests\Unit\Http\Controllers\Api;

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Entities\Right;
use App\Entities\User;
use App\Http\Transformers\CommentTransformer;
use App\Http\Transformers\GrammarTransformer;
use App\Http\Transformers\RightTransformer;
use App\Http\Transformers\UserTransformer;
use Dingo\Api\Routing\UrlGenerator;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\BrowserKitTestCase;
use Tests\Traits\ApiHelpers;

class GrammarsControllerTest extends BrowserKitTestCase
{
    use DatabaseMigrations;
    use ApiHelpers;

    public function testIndex()
    {
        $user = factory(User::class)->create();
        factory(Grammar::class, 10)->create();

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.index');

        $this
            ->actingAsApiUser($user)
            ->get($route, $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => [
                '*' => GrammarTransformer::attrs(),
            ],
            'meta' => [
                'pagination',
            ],
        ]);
    }

    /**
     * @dataProvider storeProvider
     *
     * @param array    $payload
     * @param callable $assertCb
     */
    public function testStore(array $payload, callable $assertCb)
    {
        $user = factory(User::class)->create();

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.store');

        $this
            ->actingAsApiUser($user)
            ->post($route, $payload, $this->headers('v1', $user));

        $assertCb($this, $user);
    }

    public function storeProvider()
    {
        return [
            'success' => [
                [
                    'name' => 'grammar1',
                    'content' => 'hi',
                    'public_view' => false,
                    'allow_to_comment' => false,
                ],
                function ($testcase, $user) {
                    $testcase->seeJsonStructure([
                        'data' => GrammarTransformer::attrs(),
                    ]);
                    $testcase->seeInDatabase('grammars', [
                        'user_id' => $user->id,
                        'name' => 'grammar1',
                        'content' => 'hi',
                        'public_view' => false,
                        'allow_to_comment' => false,
                    ]);
                },
            ],
            'check sanitizers to work' => [
                [
                    'name' => ' grammar1  ',
                    'content' => "hi \r",
                    'public_view' => false,
                    'allow_to_comment' => false,
                    'user_id' => 100,
                ],
                function ($testcase, $user) {
                    $testcase->seeJsonStructure([
                        'data' => GrammarTransformer::attrs(),
                    ]);
                    $testcase->seeInDatabase('grammars', [
                        'user_id' => $user->id,
                        'name' => 'grammar1',
                        'content' => 'hi',
                        'public_view' => false,
                        'allow_to_comment' => false,
                    ]);
                },
            ],
        ];
    }

    /**
     * @dataProvider showSuccessProvider
     */
    public function testShow($cb)
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();
        factory(Comment::class, 10)->create(['grammar_id' => $grammar->id]);
        factory(Right::class, 10)->create(['grammar_id' => $grammar->id]);
        $cb($user, $grammar);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.show', [$grammar->id]);

        $this
            ->actingAsApiUser($user)
            ->get($route, $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => array_merge(
                GrammarTransformer::attrs(),
                [
                    'owner' => ['data' => UserTransformer::attrs()],
                    'rights' => ['data' => ['*' => RightTransformer::attrs()]],
                    'comments' => [
                        'data' => [
                            '*' => array_merge(
                                CommentTransformer::attrs(),
                                [
                                    'user' => [
                                        'data' => UserTransformer::attrs(),
                                    ],
                                ]
                            ),
                        ],
                    ],
                ]
            ),
        ]);
    }

    public function showSuccessProvider()
    {
        return [
            'user is admin' => [
                function ($user, $grammar) {
                    $user->update(['is_admin' => true]);
                },
            ],
            'user is grammar owner' => [
                function ($user, $grammar) {
                    $grammar->update(['user_id' => $user->id]);
                },
            ],
            'grammar is public' => [
                function ($user, $grammar) {
                    $grammar->update(['public_view' => true]);
                },
            ],
            'user has right to view grammar' => [
                function ($user, $grammar) {
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view' => true,
                    ]);
                },
            ],
        ];
    }

    public function testShowUnauthorized()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create(['public_view' => false]);
        factory(Right::class)->create([
            'user_id' => $user->id,
            'grammar_id' => $grammar->id,
            'view' => false,
            'comment' => false,
            'edit' => false,
            'admin' => false,
        ]);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.show', [$grammar->id]);

        $this
            ->actingAsApiUser($user)
            ->get($route, $this->headers('v1', $user));

        $this->assertResponseStatus(403);
    }

    /**
     * @dataProvider destroyProvider
     */
    public function testDestroy($cb)
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();
        $cb($user, $grammar);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.destroy', $grammar->id);

        $this
            ->actingAsApiUser($user)
            ->delete($route, [], $this->headers('v1', $user));

        $this->assertResponseStatus(204);
        $this->notSeeInDatabase('grammars', [
            'id' => $grammar->id,
        ]);
    }

    public function destroyProvider()
    {
        return [
            'user is admin' => [
                function ($user, $grammar) {
                    $user->update(['is_admin' => true]);
                },
            ],
            'user is grammar owner' => [
                function ($user, $grammar) {
                    $grammar->update(['user_id' => $user->id]);
                },
            ],
        ];
    }

    public function testDestroyOutdated()
    {
        $user = factory(User::class)->create();
        $parent = Grammar::create([
            'user_id' => $user->id,
            'name' => 'parent',
            'content' => 'content',
            'public_view' => true,
        ]);
        $child = Grammar::create([
            'user_id' => $user->id,
            'name' => 'child',
            'content' => 'content',
            'public_view' => true,
        ]);
        $child->makeChildOf($parent);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.destroy', $parent->id);

        $this
            ->actingAsApiUser($user)
            ->delete($route, [], $this->headers('v1', $user));

        $this->assertResponseStatus(403);
    }

    public function testDestroyUnauthorizedNotOwner()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.destroy', $grammar->id);

        $this
            ->actingAsApiUser($user)
            ->delete($route, [], $this->headers('v1', $user));

        $this->assertResponseStatus(403);
    }

    public function testAllVersions()
    {
        $user = factory(User::class)->create();

        $parent = Grammar::create([
            'user_id' => $user->id,
            'name' => 'parent',
            'content' => 'content',
            'public_view' => true,
        ]);
        $child = Grammar::create([
            'user_id' => $user->id,
            'name' => 'child',
            'content' => 'content',
            'public_view' => true,
        ]);
        $child->makeChildOf($parent);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.all-versions', $child);

        $this
            ->actingAsApiUser($user)
            ->get($route, $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => [
                '*' => array_merge(
                    GrammarTransformer::attrs(),
                    [
                        'updater' => ['data' => UserTransformer::attrs()],
                    ]
                ),
            ],
        ]);
        $this->seeJson([
            'name' => 'parent',
        ]);
        $this->seeJson([
            'name' => 'child',
        ]);
    }

    public function testDiff()
    {
        $user = factory(User::class)->create();

        $parent = Grammar::create([
            'user_id' => $user->id,
            'name' => 'parent',
            'content' => 'content',
            'public_view' => true,
        ]);
        $child = Grammar::create([
            'user_id' => $user->id,
            'name' => 'child',
            'content' => 'content2',
            'public_view' => true,
        ]);
        $child->makeChildOf($parent);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.diff', $child);

        $this
            ->actingAsApiUser($user)
            ->get($route, $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => [
                'lines',
            ],
        ]);
    }
}
