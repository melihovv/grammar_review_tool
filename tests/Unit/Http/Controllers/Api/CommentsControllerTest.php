<?php

namespace Tests\Unit\Http\Controllers\Api;

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Entities\Right;
use App\Entities\User;
use App\Http\Transformers\CommentTransformer;
use App\Http\Transformers\UserTransformer;
use Dingo\Api\Routing\UrlGenerator;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\BrowserKitTestCase;
use Tests\Traits\ApiHelpers;

class CommentsControllerTest extends BrowserKitTestCase
{
    use DatabaseMigrations;
    use ApiHelpers;

    /**
     * @dataProvider storeProvider
     */
    public function testStore($cb)
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();
        $cb($user, $grammar);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.comments.store', [$grammar->id]);

        $this
            ->actingAsApiUser($user)
            ->post($route, [
                'content' => 'content1',
                'row' => 1,
                'column' => 0,
            ], $this->headers('v1', $user));

        $this->seeJsonStructure($this->responseStructure());
        $this->seeInDatabase('comments', [
            'user_id' => $user->id,
            'grammar_id' => $grammar->id,
            'content' => 'content1',
            'row' => 1,
            'column' => 0,
        ]);
    }

    public function storeProvider()
    {
        return [
            'user is admin' => [function ($user, $grammar) {
                $user->update(['is_admin' => true]);
            }],
            'user is grammar owner' => [function ($user, $grammar) {
                $grammar->update(['user_id' => $user->id]);
            }],
            'user is grammar owner and grammar is not allowed to comment' => [
                function ($user, $grammar) {
                    $grammar->update([
                        'user_id' => $user->id,
                        'allow_to_comment' => false,
                    ]);
                },
            ],
            'user has right to comment grammar' => [function ($user, $grammar) {
                $grammar->update(['allow_to_comment' => true]);
                factory(Right::class)->create([
                    'user_id' => $user->id,
                    'grammar_id' => $grammar->id,
                    'comment' => true,
                ]);
            }],
        ];
    }

    public function testStoreSanitizers()
    {
        $user = factory(User::class, 'admin')->create();
        $grammar = factory(Grammar::class)->create();

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.comments.store', [$grammar->id]);

        $this
            ->actingAsApiUser($user)
            ->post($route, [
                'content' => 'content1  ',
                'row' => 1,
                'column' => 0,
                'user_id' => 100500,
                'grammar_id' => 100500,
            ], $this->headers('v1', $user));

        $this->seeJsonStructure($this->responseStructure());
        $this->seeInDatabase('comments', [
            'user_id' => $user->id,
            'grammar_id' => $grammar->id,
            'content' => 'content1',
            'row' => 1,
            'column' => 0,
        ]);
    }

    /**
     * @dataProvider storeUnauthorizedProvider
     */
    public function testStoreUnauthorized($cb)
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();
        $cb($user, $grammar);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.comments.store', [$grammar->id]);

        $this
            ->actingAsApiUser($user)
            ->post($route, [], $this->headers('v1', $user));

        $this->assertResponseStatus(403);
    }

    public function storeUnauthorizedProvider()
    {
        return [
            'user has right to comment grammar, but grammar is not allowed to be commented' => [
                function ($user, $grammar) {
                    $grammar->update(['allow_to_comment' => false]);
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'comment' => true,
                    ]);
                },
            ],
            'user has not right to comment grammar' => [
                function ($user, $grammar) {
                    $grammar->update(['allow_to_comment' => true]);
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view' => true,
                        'comment' => false,
                    ]);
                },
            ],
        ];
    }

    /**
     * @dataProvider updateProvider
     */
    public function testUpdate($cb)
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();
        $comment = factory(Comment::class)->create();
        $cb($user, $grammar, $comment);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.comments.update', [$grammar->id, $comment->id]);

        $this
            ->actingAsApiUser($user)
            ->put($route, [
                'content' => 'content2',
            ], $this->headers('v1', $user));

        $this->seeJsonStructure($this->responseStructure());
        $this->seeInDatabase('comments', [
            'user_id' => $user->id,
            'grammar_id' => $grammar->id,
            'content' => 'content2',
            'row' => $comment->row,
            'column' => $comment->column,
        ]);
    }

    public function updateProvider()
    {
        return [
            'user is admin' => [function ($user, $grammar, $comment) {
                $user->update(['is_admin' => true]);
                $grammar->update(['user_id' => $user->id]);
            }],
            'user has right to comment and he is comment owner' => [
                function ($user, $grammar, $comment) {
                    $grammar->update([
                        'allow_to_comment' => true,
                    ]);
                    $comment->update(['user_id' => $user->id]);
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'comment' => true,
                    ]);
                },
            ],
        ];
    }

    /**
     * @dataProvider updateSanitizersProvider
     *
     * @param callable $setupCb
     */
    public function testUpdateSanitizers(callable $setupCb)
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();
        $comment = factory(Comment::class)->create();
        $payload = $setupCb($user, $grammar, $comment);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.comments.update', [$grammar->id, $comment->id]);

        $this
            ->actingAsApiUser($user)
            ->put($route, $payload, $this->headers('v1', $user));

        $this->seeJsonStructure($this->responseStructure());
        $this->seeInDatabase('comments', [
            'user_id' => $user->id,
            'grammar_id' => $grammar->id,
            'content' => 'content2',
            'row' => $comment->row,
            'column' => $comment->column,
        ]);
    }

    public function updateSanitizersProvider()
    {
        return [
            'user is admin' => [
                function ($user, $grammar, $comment) {
                    $user->update(['is_admin' => true]);
                    $grammar->update(['user_id' => $user->id]);

                    return [
                        'content' => 'content2  ',
                        'row' => 100500,
                        'column' => 100500,
                        'user_id' => 100500,
                        'grammar_id' => 100500,
                    ];
                },
            ],
            'user has right to comment and he is comment owner' => [
                function ($user, $grammar, $comment) {
                    $grammar->update([
                        'allow_to_comment' => true,
                    ]);
                    $comment->update(['user_id' => $user->id]);
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'comment' => true,
                    ]);

                    return [
                        'content' => 'content2  ',
                        'row' => 100500,
                        'column' => 100500,
                        'user_id' => 100500,
                        'grammar_id' => 100500,
                    ];
                },
            ],
        ];
    }

    /**
     * @dataProvider updateUnauthorizedProvider
     */
    public function testUpdateUnauthorized($cb)
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();
        $comment = factory(Comment::class)->create();
        $cb($user, $grammar, $comment);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.comments.update', [$grammar->id, $comment->id]);

        $this
            ->actingAsApiUser($user)
            ->put($route, [], $this->headers('v1', $user));

        $this->assertResponseStatus(403);
    }

    public function updateUnauthorizedProvider()
    {
        return [
            'user has not right to comment' => [
                function ($user, $grammar, $comment) {
                    $grammar->update(['allow_to_comment' => true]);
                },
            ],
            'user has right to comment, but he is not comment owner' => [
                function ($user, $grammar, $comment) {
                    $grammar->update(['allow_to_comment' => true]);
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'comment' => true,
                    ]);
                },
            ],
            'user has not right to comment, but he is comment owner' => [
                function ($user, $grammar, $comment) {
                    $grammar->update(['allow_to_comment' => true]);
                    $comment->update(['user_id' => $user->id]);
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'comment' => false,
                    ]);
                },
            ],
        ];
    }

    public function testUpdateByAdminDoesNotChangeCommentOwnerAndGrammar()
    {
        $user = factory(User::class, 'admin')->create();
        $grammar = factory(Grammar::class)->create();
        $comment = factory(Comment::class)->create([
            'user_id' => $user->id,
            'grammar_id' => $grammar->id,
            'content' => 'content1',
            'row' => 1,
            'column' => 0,
        ]);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.comments.update', [$grammar->id, $comment->id]);

        $this
            ->actingAsApiUser($user)
            ->put($route, [
                'content' => 'content2',
                'row' => 1,
                'column' => 0,
                'grammar_id' => 10,
                'user_id' => 20,
            ], $this->headers('v1', $user));

        $this->seeJsonStructure($this->responseStructure());
        $this->seeInDatabase('comments', [
            'user_id' => $user->id,
            'grammar_id' => $grammar->id,
            'content' => 'content2',
            'row' => 1,
            'column' => 0,
        ]);
    }

    public function testUpdateAdminCanChangeAnyOtherComment()
    {
        $admin = factory(User::class, 'admin')->create();
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create(['user_id' => $user->id]);
        $comment = factory(Comment::class)->create([
            'user_id' => $user->id,
            'grammar_id' => $grammar->id,
            'content' => 'content1',
            'row' => 1,
            'column' => 0,
        ]);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.comments.update', [$grammar->id, $comment->id]);

        $this
            ->actingAsApiUser($admin)
            ->put($route, [
                'content' => 'content2',
                'row' => 1,
                'column' => 0,
                'grammar_id' => 10,
                'user_id' => 20,
            ], $this->headers('v1', $admin));

        $this->seeJsonStructure($this->responseStructure());
        $this->seeInDatabase('comments', [
            'user_id' => $user->id,
            'grammar_id' => $grammar->id,
            'content' => 'content2',
            'row' => 1,
            'column' => 0,
        ]);
    }

    /**
     * @dataProvider destroyProvider
     */
    public function testDestroy($cb)
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();
        $comment = factory(Comment::class)->create();
        $cb($user, $grammar, $comment);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.comments.destroy', [$grammar->id, $comment->id]);

        $this
            ->actingAsApiUser($user)
            ->delete($route, [], $this->headers('v1', $user));

        $this->assertResponseStatus(204);
        $this->notSeeInDatabase('comments', [
            'id' => $comment->id,
        ]);
    }

    public function destroyProvider()
    {
        return [
            'user is admin' => [
                function ($user, $grammar, $comment) {
                    $user->update(['is_admin' => true]);
                },
            ],
            'user has right to comment and he is comment owner' => [
                function ($user, $grammar, $comment) {
                    $grammar->update(['allow_to_comment' => true]);
                    $comment->update(['user_id' => $user->id]);
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'comment' => true,
                    ]);
                },
            ],
        ];
    }

    /**
     * @dataProvider destroyUnauthorizedProvider
     */
    public function testDestroyUnauthorized($cb)
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();
        $comment = factory(Comment::class)->create();
        $cb($user, $grammar, $comment);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.comments.destroy', [$grammar->id, $comment->id]);

        $this
            ->actingAsApiUser($user)
            ->delete($route, [], $this->headers('v1', $user));

        $this->assertResponseStatus(403);
    }

    public function destroyUnauthorizedProvider()
    {
        return [
            'user has not right to comment' => [
                function ($user, $grammar, $comment) {
                    $grammar->update(['allow_to_comment' => true]);
                },
            ],
            'user has right to comment, but he is not comment owner' => [
                function ($user, $grammar, $comment) {
                    $grammar->update(['allow_to_comment' => true]);
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'comment' => true,
                    ]);
                },
            ],
            'user has not right to comment, but he is comment owner' => [
                function ($user, $grammar, $comment) {
                    $grammar->update(['allow_to_comment' => true]);
                    $comment->update(['user_id' => $user->id]);
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'comment' => false,
                    ]);
                },
            ],
        ];
    }

    /**
     * @return array
     */
    protected function responseStructure()
    {
        return [
            'data' => array_merge(
                CommentTransformer::attrs(),
                [
                    'user' => ['data' => UserTransformer::attrs()],
                ]
            ),
        ];
    }
}
