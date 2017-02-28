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
use App\Http\Transformers\VersionTransformer;
use Dingo\Api\Routing\UrlGenerator;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\BrowserKitTestCase;
use Tests\Traits\ApiHelpers;

class GrammarsControllerTest extends BrowserKitTestCase
{
    use DatabaseMigrations;
    use ApiHelpers;

    /**
     * @dataProvider showSuccessProvider
     */
    public function testShow($cb)
    {
        $user = factory(User::class)->create();
        list($grammar, $version) = $this->createGrammar();
        factory(Comment::class, 10)->create(['version_id' => $version->id]);
        factory(Right::class, 10)->create(['grammar_id' => $grammar->id]);
        $cb($user, $grammar);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.show', [$grammar->id]);

        $this
            ->actingAsApiUser($user)
            ->get($route, $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => array_merge(
                VersionTransformer::attrs(),
                [
                    'grammar' => [
                        'data' => array_merge(
                            GrammarTransformer::attrs(),
                            [
                                'owner' => ['data' => UserTransformer::attrs()],
                                'rights' => ['data' => ['*' => RightTransformer::attrs()]],
                            ]
                        ),
                    ],
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

    public function testVersions()
    {
        $user = factory(User::class)->create();

        list($grammar) = $this->createGrammar('parent', [
            'user_id' => $user->id,
            'name' => 'parent',
            'public_view' => true,
        ]);

        $this->updateGrammar($grammar, 'child');

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.versions', $grammar);

        $this
            ->actingAsApiUser($user)
            ->get($route, $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => [
                '*' => array_merge(
                    VersionTransformer::attrs(),
                    [
                        'updater' => ['data' => UserTransformer::attrs()],
                    ]
                ),
            ],
        ]);
    }

    public function testDiff()
    {
        $user = factory(User::class)->create();

        list($grammar) = $this->createGrammar('content', [
            'user_id' => $user->id,
            'name' => 'parent',
            'public_view' => true,
        ]);
        $this->updateGrammar($grammar, 'content2');

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.diff', $grammar);

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
