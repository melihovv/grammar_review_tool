<?php

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Entities\Right;
use App\Entities\User;
use App\Http\Transformers\CommentTransformer;
use Dingo\Api\Routing\UrlGenerator;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class CommentsControllerTest extends TestCase
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

        $this->post($route, [
            'content' => 'content1',
            'row' => 1,
            'column' => 0,
        ], $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => CommentTransformer::attrs(),
        ]);
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
                $grammar->update(['owner' => $user->id]);
            }],
            'user is grammar owner and grammar is not allowed to comment' => [
                function ($user, $grammar) {
                    $grammar->update([
                        'owner' => $user->id,
                        'allow_to_comment' => false,
                    ]);
                }
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

        $this->post($route, [], $this->headers('v1', $user));

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
                }
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
                }
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

        $this->put($route, [
            'content' => 'content2',
            'row' => 1,
            'column' => 0,
        ], $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => CommentTransformer::attrs(),
        ]);
        $this->seeInDatabase('comments', [
            'user_id' => $user->id,
            'grammar_id' => $grammar->id,
            'content' => 'content2',
            'row' => 1,
            'column' => 0,
        ]);
    }

    public function updateProvider()
    {
        return [
            'user is admin' => [function ($user, $grammar, $comment) {
                $user->update(['is_admin' => true]);
                $grammar->update(['owner' => $user->id]);
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
                }
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

        $this->put($route, [], $this->headers('v1', $user));

        $this->assertResponseStatus(403);
    }

    public function updateUnauthorizedProvider()
    {
        return [
            'user has not right to comment' => [
                function ($user, $grammar, $comment) {
                    $grammar->update(['allow_to_comment' => true]);
                }
            ],
            'user has right to comment, but he is not comment owner' => [
                function ($user, $grammar, $comment) {
                    $grammar->update(['allow_to_comment' => true]);
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'comment' => true,
                    ]);
                }
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
                }
            ],
        ];
    }

    public function testUpdateByAdminDoesNotChangeCommentOwnerAndGrammar()
    {
        $user = factory(User::class)->create(['is_admin' => true]);
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

        $this->put($route, [
            'content' => 'content2',
            'row' => 1,
            'column' => 0,
            'grammar_id' => 10,
            'user_id' => 20,
        ], $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => CommentTransformer::attrs(),
        ]);
        $this->seeInDatabase('comments', [
            'user_id' => $grammar->user->id,
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

        $this->delete($route, [], $this->headers('v1', $user));

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
                }
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
                }
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

        $this->delete($route, [], $this->headers('v1', $user));

        $this->assertResponseStatus(403);
    }

    public function destroyUnauthorizedProvider()
    {
        return [
            'user has not right to comment' => [
                function ($user, $grammar, $comment) {
                    $grammar->update(['allow_to_comment' => true]);
                }
            ],
            'user has right to comment, but he is not comment owner' => [
                function ($user, $grammar, $comment) {
                    $grammar->update(['allow_to_comment' => true]);
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'comment' => true,
                    ]);
                }
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
                }
            ],
        ];
    }
}
