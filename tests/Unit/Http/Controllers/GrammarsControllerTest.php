<?php

namespace Tests\Unit\Http\Controllers;

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Entities\Right;
use App\Entities\User;
use App\Entities\Version;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Pagination\LengthAwarePaginator;
use Tests\BrowserKitTestCase;

class GrammarsControllerTest extends BrowserKitTestCase
{
    use DatabaseMigrations;

    public function testIndex()
    {
        $user = factory(User::class)->create();
        factory(Grammar::class, 10)->create();

        $this
            ->actingAs($user)
            ->get(route('grammars.index'));

        $this->assertResponseOk();
        $this->assertViewHas('grammars');

        $grammars = $this->response->original->getData()['grammars'];
        $this->assertInstanceOf(LengthAwarePaginator::class, $grammars);
    }

    /**
     * @dataProvider indexWithVersionsProvider
     */
    public function testIndexWithVersions(callable $setupCb)
    {
        $user = $setupCb();
        list($grammar) = $this->createGrammar('content',
            ['user_id' => $user->id]);
        $this->updateGrammar($grammar, 'content2');

        $this
            ->actingAs($user)
            ->get(route('grammars.index'));

        $this->assertResponseOk();
        $this->assertViewHas('grammars');

        $grammars = $this->response->original->getData()['grammars'];
        $this->assertInstanceOf(LengthAwarePaginator::class, $grammars);
        $this->assertEquals(1, $grammars->total());
    }

    public function indexWithVersionsProvider()
    {
        return [
            'regular user' => [
                function () {
                    return factory(User::class)->create();
                },
            ],
            'admin' => [
                function () {
                    return factory(User::class, 'admin')->create();
                },
            ],
        ];
    }

    public function testShow()
    {
        $user = factory(User::class, 'admin')->create();
        list($grammar) = $this->createGrammar();

        $this
            ->actingAs($user)
            ->get(route('grammars.show', $grammar->id));

        $this->assertResponseOk();
        $this->assertViewHas(['grammar', 'version', 'latestVersion']);
    }

    public function testShowOutdatedVersion()
    {
        $user = factory(User::class, 'admin')->create();
        list($grammar) = $this->createGrammar();
        $this->updateGrammar($grammar, 'content2');

        $this
            ->actingAs($user)
            ->get(route('grammars.show', [
                'grammar' => $grammar->id,
                'version' => 0,
            ]));

        $this->assertResponseOk();
        $this->assertViewHas(['grammar', 'latestVersion']);

        $this->see('You are looking at early version of grammar. Click');
        $this->see('here');
        $this->see('to view the latest version.');
    }

    public function testCreate()
    {
        $this
            ->actingAs(factory(User::class)->create())
            ->visit(route('grammars.create'))
            ->type('title1', 'name')
            ->type('content', 'content')
            ->check('public_view')
            ->press('Create')
            ->seePageIs(route('grammars.show', 1));

        $this->seeInDatabase('grammars', [
            'name' => 'title1',
            'content' => 'content',
            'public_view' => true,
        ]);
    }

    public function testDestroy()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create(['user_id' => $user->id]);

        $this
            ->actingAs($user)
            ->delete(route('grammars.destroy', $grammar));

        $this->assertRedirectedToRoute('grammars.index');
        $this->assertNull(Grammar::first());
    }

    /**
     * @dataProvider updateProvider
     */
    public function testUpdate(callable $payloadCb)
    {
        list($user, $grammar) = $payloadCb($this);

        $this
            ->actingAs($user)
            ->put(route('grammars.update', $grammar), [
                'content' => 'new content',
                'name' => 'new name',
                'public_view' => false,
                'user_id' => 100500,
            ]);

        $this->assertRedirectedToRoute('grammars.show', 1);
        $this->seeInDatabase('grammars', [
            'id' => 1,
            'user_id' => $user->id,
            'name' => 'new name',
            'public_view' => false,
        ]);
        $this->seeInDatabase('versions', [
            'id' => 1,
            'grammar_id' => $grammar->id,
            'content' => 'content',
            'updater_id' => $user->id,
        ]);
        $this->seeInDatabase('versions', [
            'id' => 2,
            'grammar_id' => $grammar->id,
            'content' => 'new content',
            'updater_id' => $user->id,
        ]);
    }

    public function updateProvider()
    {
        return [
            'user is grammar owner' => [
                function ($testcase) {
                    $user = factory(User::class)->create();
                    list($grammar) = $testcase->createGrammar('content', [
                        'user_id' => $user->id,
                        'public_view' => true,
                    ]);

                    return [$user, $grammar];
                },
            ],
            'user is admin' => [
                function ($testcase) {
                    $user = factory(User::class, 'admin')->create();
                    list($grammar) = $testcase->createGrammar('content', [
                        'user_id' => $user->id,
                        'public_view' => true,
                    ]);

                    return [$user, $grammar];
                },
            ],
            'user has right to edit grammar' => [
                function ($testcase) {
                    $user = factory(User::class)->create();
                    list($grammar) = $testcase->createGrammar('content', [
                        'user_id' => $user->id,
                        'public_view' => true,
                    ]);
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'edit' => true,
                    ]);

                    return [$user, $grammar];
                },
            ],
            'user has right to admin grammar' => [
                function ($testcase) {
                    $user = factory(User::class)->create();
                    list($grammar) = $testcase->createGrammar('content', [
                        'user_id' => $user->id,
                        'public_view' => true,
                    ]);
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'edit' => false,
                        'admin' => true,
                    ]);

                    return [$user, $grammar];
                },
            ],
        ];
    }

    public function testUpdateWithTheSameContent()
    {
        $user = factory(User::class)->create();
        list($grammar) = $this->createGrammar('content', [
            'user_id' => $user->id,
            'public_view' => true,
        ]);

        $this
            ->actingAs($user)
            ->put(route('grammars.update', $grammar), [
                'content' => 'content',
                'name' => 'new name',
                'user_id' => 100500,
            ]);

        $this->assertEquals(1, Version::count());
    }

    /**
     * @dataProvider updateWithCommentsProvider
     */
    public function testUpdateWithComments(
        callable $setupCb,
        callable $assertCb
    ) {
        $user = factory(User::class, 'admin')->create();
        list($grammar, $content) = $setupCb($this);

        $this
            ->actingAs($user)
            ->put(route('grammars.update', $grammar), [
                'content' => $content,
                'name' => 'new name',
                'public_view' => false,
            ]);

        $assertCb($this);
    }

    public function updateWithCommentsProvider()
    {
        return [
            'some rows with comments were deleted' => [
                function ($testcase) {
                    list($grammar) = $testcase->createGrammar(<<<'NOW'
line1
line2
line3
line4
NOW
                    );
                    $content = <<<'NOW'
line2
line4
NOW;
                    $version = $grammar->getVersion(0)->first();
                    factory(Comment::class)->create([
                        'version_id' => $version->id,
                        'row' => 1,
                    ]);
                    factory(Comment::class)->create([
                        'version_id' => $version->id,
                        'row' => 3,
                    ]);
                    factory(Comment::class)->create([
                        'version_id' => $version->id,
                        'row' => 4,
                    ]);

                    return [$grammar, $content];
                },
                function ($testcase) {
                    $testcase->assertCount(4, Comment::all()->toArray());
                    $testcase->seeInDatabase('comments', [
                        'id' => 1,
                        'version_id' => 1,
                        'row' => 1,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 2,
                        'version_id' => 1,
                        'row' => 3,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 3,
                        'version_id' => 1,
                        'row' => 4,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 4,
                        'version_id' => 2,
                        'row' => 2,
                    ]);
                },
            ],
            'row was added after last row' => [
                function ($testcase) {
                    list($grammar) = $testcase->createGrammar(<<<'NOW'
line1
line2
NOW
                    );
                    $content = <<<'NOW'
line1
line2
line3
NOW;
                    factory(Comment::class)->create([
                        'version_id' => $grammar->id,
                        'row' => 2,
                    ]);

                    return [$grammar, $content];
                },
                function ($testcase) {
                    $testcase->assertCount(2, Comment::all()->toArray());
                    $testcase->seeInDatabase('comments', [
                        'id' => 1,
                        'version_id' => 1,
                        'row' => 2,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 2,
                        'version_id' => 2,
                        'row' => 2,
                    ]);
                },
            ],
            'row was added before row with comments' => [
                function ($testcase) {
                    list($grammar) = $testcase->createGrammar(<<<'NOW'
line1
line2
NOW
                    );
                    $content = <<<'NOW'
line1
line1.5
line2
NOW;
                    factory(Comment::class)->create([
                        'version_id' => $grammar->id,
                        'row' => 2,
                    ]);

                    return [$grammar, $content];
                },
                function ($testcase) {
                    $testcase->assertCount(2, Comment::all()->toArray());
                    $testcase->seeInDatabase('comments', [
                        'id' => 1,
                        'version_id' => 1,
                        'row' => 2,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 2,
                        'version_id' => 2,
                        'row' => 3,
                    ]);
                },
            ],
            'rows was added before row with comments' => [
                function ($testcase) {
                    list($grammar) = $testcase->createGrammar(<<<'NOW'
line1
line2
NOW
                    );
                    $content = <<<'NOW'
line1
line1.5.1
line1.5.2
line2
NOW;
                    factory(Comment::class)->create([
                        'version_id' => $grammar->id,
                        'row' => 2,
                    ]);

                    return [$grammar, $content];
                },
                function ($testcase) {
                    $testcase->assertCount(2, Comment::all()->toArray());
                    $testcase->seeInDatabase('comments', [
                        'id' => 1,
                        'version_id' => 1,
                        'row' => 2,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 2,
                        'version_id' => 2,
                        'row' => 4,
                    ]);
                },
            ],
            'several rows was added before rows with comments' => [
                function ($testcase) {
                    list($grammar) = $testcase->createGrammar(<<<'NOW'
line1
line2
line3
NOW
                    );
                    $content = <<<'NOW'
line1
line1.5
line2
line2.5.1
line2.5.2
line3
NOW;
                    factory(Comment::class)->create([
                        'version_id' => $grammar->id,
                        'row' => 2,
                    ]);
                    factory(Comment::class)->create([
                        'version_id' => $grammar->id,
                        'row' => 3,
                    ]);

                    return [$grammar, $content];
                },
                function ($testcase) {
                    $testcase->assertCount(4, Comment::all()->toArray());
                    $testcase->seeInDatabase('comments', [
                        'id' => 1,
                        'version_id' => 1,
                        'row' => 2,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 2,
                        'version_id' => 1,
                        'row' => 3,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 3,
                        'version_id' => 2,
                        'row' => 3,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 4,
                        'version_id' => 2,
                        'row' => 6,
                    ]);
                },
            ],
            'several rows was added before rows with comments, some rows were deleted' => [
                function ($testcase) {
                    list($grammar) = $testcase->createGrammar(<<<'NOW'
line1
line2
line3
line4
line5
NOW
                    );
                    $content = <<<'NOW'
line1
line1.5.1
line1.5.2
line2
line3.1
line3.2
line4
line5
NOW;
                    factory(Comment::class)->create([
                        'version_id' => $grammar->id,
                        'row' => 2,
                    ]);
                    factory(Comment::class)->create([
                        'version_id' => $grammar->id,
                        'row' => 3,
                    ]);
                    factory(Comment::class)->create([
                        'version_id' => $grammar->id,
                        'row' => 4,
                    ]);

                    return [$grammar, $content];
                },
                function ($testcase) {
                    $testcase->assertCount(5, Comment::all()->toArray());
                    $testcase->seeInDatabase('comments', [
                        'id' => 1,
                        'version_id' => 1,
                        'row' => 2,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 2,
                        'version_id' => 1,
                        'row' => 3,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 3,
                        'version_id' => 1,
                        'row' => 4,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 4,
                        'version_id' => 2,
                        'row' => 4,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 5,
                        'version_id' => 2,
                        'row' => 7,
                    ]);
                },
            ],
            'row with comment was changed' => [
                function ($testcase) {
                    list($grammar) = $testcase->createGrammar(<<<'NOW'
line1
line2
line3
NOW
                    );
                    $content = <<<'NOW'
line1
line22
line3
NOW;
                    factory(Comment::class)->create([
                        'version_id' => $grammar->id,
                        'row' => 1,
                    ]);
                    factory(Comment::class)->create([
                        'version_id' => $grammar->id,
                        'row' => 2,
                    ]);
                    factory(Comment::class)->create([
                        'version_id' => $grammar->id,
                        'row' => 3,
                    ]);

                    return [$grammar, $content];
                },
                function ($testcase) {
                    $testcase->assertCount(5, Comment::all()->toArray());
                    $testcase->seeInDatabase('comments', [
                        'id' => 1,
                        'version_id' => 1,
                        'row' => 1,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 2,
                        'version_id' => 1,
                        'row' => 2,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 3,
                        'version_id' => 1,
                        'row' => 3,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 4,
                        'version_id' => 2,
                        'row' => 1,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 5,
                        'version_id' => 2,
                        'row' => 3,
                    ]);
                },
            ],
        ];
    }

    /**
     * @dataProvider historyProvider
     */
    public function testHistory(callable $setupCb, callable $assertCb)
    {
        list($user, $grammar) = $setupCb();

        $this
            ->actingAs($user)
            ->get(route('grammars.history', $grammar));

        $assertCb($this);
    }

    public function historyProvider()
    {
        return [
            'user is admin' => [
                function () {
                    $user = factory(User::class, 'admin')->create();
                    $grammar = $this->createGrammar('content');

                    return [$user, $grammar];
                },
                function ($testcase) {
                    $testcase->assertResponseOk();
                    $testcase->assertViewHas(['grammar', 'latestVersion']);
                },
            ],
            'user is grammar owner' => [
                function () {
                    $user = factory(User::class)->create();
                    $grammar = $this->createGrammar('content', [
                        'user_id' => $user->id,
                    ]);

                    return [$user, $grammar];
                },
                function ($testcase) {
                    $testcase->assertResponseOk();
                    $testcase->assertViewHas(['grammar', 'latestVersion']);
                },
            ],
            'user has right to view grammar' => [
                function () {
                    $user = factory(User::class)->create();
                    list($grammar) = $this->createGrammar('content');
                    factory(Right::class)->create([
                        'grammar_id' => $grammar->id,
                        'user_id' => $user->id,
                        'view_comment' => true,
                        'edit' => false,
                    ]);

                    return [$user, $grammar];
                },
                function ($testcase) {
                    $testcase->assertResponseOk();
                    $testcase->assertViewHas(['grammar', 'latestVersion']);
                },
            ],
            'user has not right to view grammar' => [
                function () {
                    $user = factory(User::class)->create();
                    $grammar = $this->createGrammar('content');

                    return [$user, $grammar];
                },
                function ($testcase) {
                    $testcase->assertResponseStatus(403);
                },
            ],
        ];
    }
}
