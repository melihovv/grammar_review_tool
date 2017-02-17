<?php

namespace Tests\Unit\Http\Controllers;

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

    public function testShow()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create(['user_id' => $user->id]);

        $this
            ->actingAs($user)
            ->get(route('grammars.show', $grammar->id));

        $this->assertResponseOk();
        $this->assertViewHas('grammar');
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
}
