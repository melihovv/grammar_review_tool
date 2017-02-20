<?php

namespace Tests\Unit\Http\Controllers;

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Entities\Right;
use App\Entities\User;
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
        $parent = Grammar::create([
            'user_id' => $user->id,
            'name' => 'name',
            'content' => 'content',
            'public_view' => true,
        ]);
        $child = Grammar::create([
            'user_id' => $user->id,
            'name' => 'name',
            'content' => 'content',
            'public_view' => true,
        ]);
        $child->makeChildOf($parent);

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
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create(['user_id' => $user->id]);

        $this
            ->actingAs($user)
            ->get(route('grammars.show', $grammar->id));

        $this->assertResponseOk();
        $this->assertViewHas(['grammar', 'lastVersion']);
    }

    public function testShowOutdatedVersion()
    {
        $user = factory(User::class)->create();
        $parent = Grammar::create([
            'user_id' => $user->id,
            'name' => 'name',
            'content' => 'content',
            'public_view' => true,
        ]);
        $child = Grammar::create([
            'user_id' => $user->id,
            'name' => 'name',
            'content' => 'content',
            'public_view' => true,
        ]);
        $child->makeChildOf($parent);

        $this
            ->actingAs($user)
            ->get(route('grammars.show', $parent->id));

        $this->assertResponseOk();
        $this->assertViewHas(['grammar', 'lastVersion']);

        $this->see('You are looking not the');
        $this->see('latest');
        $this->see('version of grammar');
    }

    public function testCreate()
    {
        $this
            ->actingAs(factory(User::class)->create())
            ->visit(route('grammars.create'))
            ->type('title1', 'name')
            ->type('content', 'content')
            ->check('public_view')
            ->check('allow_to_comment')
            ->press('Create')
            ->seePageIs(route('grammars.show', 1));

        $this->seeInDatabase('grammars', [
            'name' => 'title1',
            'content' => 'content',
            'public_view' => 1,
            'allow_to_comment' => 1,
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
    public function testUpdate(callable $payloadCb, callable $assertCb)
    {
        list($user, $grammar) = $payloadCb();

        $this
            ->actingAs($user)
            ->put(route('grammars.update', $grammar), [
                'content' => 'new content',
                'name' => 'new name',
                'allow_to_comment' => true,
                'public_view' => false,
                'user_id' => 100500,
            ]);

        $this->assertRedirectedToRoute('grammars.show', $grammar);

        $assertCb($this, $user, $grammar);
    }

    public function updateProvider()
    {
        return [
            'user is grammar owner' => [
                function () {
                    $user = factory(User::class)->create();
                    $grammar = factory(Grammar::class)->create([
                        'user_id' => $user->id,
                        'allow_to_comment' => false,
                        'public_view' => true,
                    ]);

                    return [$user, $grammar];
                },
                function ($testcase, $user, $grammar) {
                    $testcase->seeInDatabase('grammars', [
                        'id' => $grammar->id,
                        'user_id' => $user->id,
                        'content' => 'new content',
                        'name' => 'new name',
                        'allow_to_comment' => true,
                        'public_view' => false,
                    ]);
                },
            ],
            'user is admin' => [
                function () {
                    $user = factory(User::class, 'admin')->create();
                    $grammar = factory(Grammar::class)->create([
                        'allow_to_comment' => false,
                        'public_view' => true,
                    ]);

                    return [$user, $grammar];
                },
                function ($testcase, $user, $grammar) {
                    $testcase->seeInDatabase('grammars', [
                        'id' => $grammar->id,
                        'user_id' => $grammar->user_id,
                        'content' => 'new content',
                        'name' => 'new name',
                        'allow_to_comment' => true,
                        'public_view' => false,
                    ]);
                },
            ],
            'user has right to edit grammar' => [
                function () {
                    $user = factory(User::class)->create();
                    $grammar = factory(Grammar::class)->create([
                        'allow_to_comment' => false,
                        'public_view' => true,
                    ]);
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'edit' => true,
                    ]);

                    return [$user, $grammar];
                },
                function ($testcase, $user, $grammar) {
                    $testcase->seeInDatabase('grammars', [
                        'id' => $grammar->id,
                        'user_id' => $grammar->user_id,
                        'content' => 'new content',
                        'name' => 'new name',
                        'allow_to_comment' => true,
                        'public_view' => false,
                    ]);
                },
            ],
        ];
    }

    public function testUpdateOutdatedGrammar()
    {
        $user = factory(User::class, 'admin')->create();
        $parent = Grammar::create([
            'user_id' => $user->id,
            'name' => 'name',
            'content' => 'content1',
            'public_view' => true,
        ]);
        $child = Grammar::create([
            'user_id' => $user->id,
            'name' => 'name',
            'content' => 'content2',
            'public_view' => true,
        ]);
        $child->makeChildOf($parent);

        $this
            ->actingAs($user)
            ->put(route('grammars.update', $parent), [
                'content' => 'new content',
                'name' => 'new name',
                'allow_to_comment' => true,
                'public_view' => false,
                'user_id' => 100500,
            ]);

        $this->assertResponseStatus(403);
        $this->seeInDatabase('grammars', [
            'id' => $parent->id,
            'content' => 'content1',
        ]);
    }

    /**
     * @dataProvider updateWithCommentsProvider
     */
    public function testUpdateWithComments(
        callable $setupCb,
        callable $assertCb
    ) {
        $user = factory(User::class, 'admin')->create();
        list($grammar, $content) = $setupCb();

        $this
            ->actingAs($user)
            ->put(route('grammars.update', $grammar), [
                'content' => $content,
                'name' => 'new name',
                'allow_to_comment' => true,
                'public_view' => false,
            ]);

        $this->seeInDatabase('grammars', [
            'id' => $grammar->id,
            'content' => $content,
        ]);

        $assertCb($this);
    }

    public function updateWithCommentsProvider()
    {
        return [
            'some rows with comments were deleted' => [
                function () {
                    $grammar = factory(Grammar::class)->create([
                        'content' => <<<'NOW'
line1
line2
line3
line4
NOW
                        ,
                    ]);
                    $content = <<<'NOW'
line2
line4
NOW;
                    factory(Comment::class)->create([
                        'grammar_id' => $grammar->id,
                        'row' => 1,
                    ]);
                    factory(Comment::class)->create([
                        'grammar_id' => $grammar->id,
                        'row' => 3,
                    ]);
                    factory(Comment::class)->create([
                        'grammar_id' => $grammar->id,
                        'row' => 4,
                    ]);

                    return [$grammar, $content];
                },
                function ($testcase) {
                    $testcase->assertCount(1, Comment::all()->toArray());
                    $testcase->seeInDatabase('comments', [
                        'id' => 3,
                        'row' => 2,
                    ]);
                },
            ],
            'row was added after last row' => [
                function () {
                    $grammar = factory(Grammar::class)->create([
                        'content' => <<<'NOW'
line1
line2
NOW
                        ,
                    ]);
                    $content = <<<'NOW'
line1
line2
line3
NOW;
                    factory(Comment::class)->create([
                        'grammar_id' => $grammar->id,
                        'row' => 2,
                    ]);

                    return [$grammar, $content];
                },
                function ($testcase) {
                    $testcase->seeInDatabase('comments', [
                        'id' => 1,
                        'row' => 2,
                    ]);
                },
            ],
            'row was added before row with comments' => [
                function () {
                    $grammar = factory(Grammar::class)->create([
                        'content' => <<<'NOW'
line1
line2
NOW
                        ,
                    ]);
                    $content = <<<'NOW'
line1
line1.5
line2
NOW;
                    factory(Comment::class)->create([
                        'grammar_id' => $grammar->id,
                        'row' => 2,
                    ]);

                    return [$grammar, $content];
                },
                function ($testcase) {
                    $testcase->seeInDatabase('comments', [
                        'id' => 1,
                        'row' => 3,
                    ]);
                },
            ],
            'rows was added before row with comments' => [
                function () {
                    $grammar = factory(Grammar::class)->create([
                        'content' => <<<'NOW'
line1
line2
NOW
                        ,
                    ]);
                    $content = <<<'NOW'
line1
line1.5.1
line1.5.2
line2
NOW;
                    factory(Comment::class)->create([
                        'grammar_id' => $grammar->id,
                        'row' => 2,
                    ]);

                    return [$grammar, $content];
                },
                function ($testcase) {
                    $testcase->seeInDatabase('comments', [
                        'id' => 1,
                        'row' => 4,
                    ]);
                },
            ],
            'several rows was added before rows with comments' => [
                function () {
                    $grammar = factory(Grammar::class)->create([
                        'content' => <<<'NOW'
line1
line2
line3
NOW
                        ,
                    ]);
                    $content = <<<'NOW'
line1
line1.5
line2
line2.5.1
line2.5.2
line3
NOW;
                    factory(Comment::class)->create([
                        'grammar_id' => $grammar->id,
                        'row' => 2,
                    ]);
                    factory(Comment::class)->create([
                        'grammar_id' => $grammar->id,
                        'row' => 3,
                    ]);

                    return [$grammar, $content];
                },
                function ($testcase) {
                    $testcase->seeInDatabase('comments', [
                        'id' => 1,
                        'row' => 3,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 2,
                        'row' => 6,
                    ]);
                },
            ],
            'several rows was added before rows with comments, some rows were deleted' => [
                function () {
                    $grammar = factory(Grammar::class)->create([
                        'content' => <<<'NOW'
line1
line2
line3
line4
line5
NOW
                        ,
                    ]);
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
                        'grammar_id' => $grammar->id,
                        'row' => 2,
                    ]);
                    factory(Comment::class)->create([
                        'grammar_id' => $grammar->id,
                        'row' => 3,
                    ]);
                    factory(Comment::class)->create([
                        'grammar_id' => $grammar->id,
                        'row' => 4,
                    ]);

                    return [$grammar, $content];
                },
                function ($testcase) {
                    $testcase->seeInDatabase('comments', [
                        'id' => 1,
                        'row' => 4,
                    ]);
                    $testcase->notSeeInDatabase('comments', [
                        'id' => 2,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 3,
                        'row' => 7,
                    ]);
                },
            ],
            'row with comment was changed' => [
                function () {
                    $grammar = factory(Grammar::class)->create([
                        'content' => <<<'NOW'
line1
line2
line3
NOW
                        ,
                    ]);
                    $content = <<<'NOW'
line1
line22
line3
NOW;
                    factory(Comment::class)->create([
                        'grammar_id' => $grammar->id,
                        'row' => 1,
                    ]);
                    factory(Comment::class)->create([
                        'grammar_id' => $grammar->id,
                        'row' => 2,
                    ]);
                    factory(Comment::class)->create([
                        'grammar_id' => $grammar->id,
                        'row' => 3,
                    ]);

                    return [$grammar, $content];
                },
                function ($testcase) {
                    $testcase->seeInDatabase('comments', [
                        'id' => 1,
                        'row' => 1,
                    ]);
                    $testcase->notSeeInDatabase('comments', [
                        'id' => 2,
                    ]);
                    $testcase->seeInDatabase('comments', [
                        'id' => 3,
                        'row' => 3,
                    ]);
                },
            ],
        ];
    }

    public function testHistory()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();

        $this
            ->actingAs($user)
            ->get(route('grammars.history', $grammar));

        $this->assertResponseOk();
        $this->assertViewHas(['grammar', 'latestVersion']);
    }
}
