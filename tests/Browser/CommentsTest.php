<?php

namespace Tests\Browser;

use App\Entities\Right;
use App\Entities\User;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Grammars\ShowPage;
use Tests\DuskTestCase;
use Tests\Traits\DatabaseMigrations;
use Tests\Traits\SudoDatabaseTransactions;

/**
 * @group comments
 */
class CommentsTest extends DuskTestCase
{
    use DatabaseMigrations;
    use SudoDatabaseTransactions;

    /**
     * @param callable $setupCb
     * @dataProvider commentsProvider
     */
    public function testUserCanComment(callable $setupCb)
    {
        $this->browse(function (Browser $browser) use ($setupCb) {
            list($user, $grammar) = $setupCb();

            $browser
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->commentRow(1, 'Comment1', $user)
                ->commentRow(1, 'Comment2', $user)
                ->commentSymbol(6, 'COMMENT', 'Comment3', $user)
                ->commentSymbol(6, 'COMMENT', 'Comment4', $user)
                ->logout();
        });
    }

    /**
     * @param callable $setupCb
     * @dataProvider commentsProvider
     */
    public function testUserCannotAddEmptyComment(callable $setupCb)
    {
        $this->browse(function (Browser $browser) use ($setupCb) {
            list($user, $grammar) = $setupCb();

            $browser
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->commentRow(1, '', $user)
                ->dontSeeElement('@comment-holder')
                ->logout();
        });
    }

    /**
     * @param callable $setupCb
     * @dataProvider commentsProvider
     */
    public function testUserCanUpdateComment(callable $setupCb)
    {
        $this->browse(function (Browser $browser) use ($setupCb) {
            list($user, $grammar) = $setupCb();

            $browser
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->commentRow(1, 'Comment1', $user)
                ->click('@edit-comment-btn')
                ->type('textarea', 'Comment1Updated')
                ->clickLink('Update')
                ->pause(1000)
                ->waitFor('@comment-holder')
                ->assertSee('Comment1Updated')
                ->logout();
        });
    }

    /**
     * @dataProvider commentsProvider
     *
     * @param callable $setupCb
     */
    public function testUserCanDeleteComment(callable $setupCb)
    {
        $this->browse(function (Browser $browser) use ($setupCb) {
            list($user, $grammar) = $setupCb();

            $browser
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->commentRow(1, 'Comment1', $user)
                ->click('@delete-comment-btn')
                ->pause(1000)
                ->assertDontSee('Comment1')
                ->logout();
        });
    }

    public function commentsProvider()
    {
        return [
            'grammar owner' => [
                function () {
                    $user = factory(User::class)->create();
                    list($grammar) = $this->createGrammar($this->getGrammarContent(),
                        [
                            'user_id' => $user->id,
                        ]);

                    return [$user, $grammar];
                },
            ],
            'admin' => [
                function () {
                    $user = factory(User::class, 'admin')->create();
                    list($grammar) = $this->createGrammar($this->getGrammarContent());

                    return [$user, $grammar];
                },
            ],
            'user with comment right' => [
                function () {
                    $user = factory(User::class)->create();
                    list($grammar) = $this->createGrammar($this->getGrammarContent());
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view_comment' => true,
                        'edit' => false,
                        'admin' => false,
                    ]);

                    return [$user, $grammar];
                },
            ],
        ];
    }

    /**
     * @param callable $setupCb
     * @dataProvider userCannotUpdateOrDeleteOtherCommentProvider
     */
    public function testUserCannotUpdateOrDeleteOtherComment(callable $setupCb)
    {
        $this->browse(function (Browser $browser1, Browser $browser2, Browser $browser3) use ($setupCb) {
            list($user1, $user2, $grammar) = $setupCb();

            $browser1
                ->loginAs($user1)
                ->visit(new ShowPage($grammar->id))
                ->commentRow(1, 'Comment1', $user1)
                ->logout();

            $admin = factory(User::class, 'admin')->create();
            $browser2
                ->loginAs($admin)
                ->visit(new ShowPage($grammar->id))
                ->commentRow(1, 'Comment2', $admin)
                ->logout();

            $browser3
                ->loginAs($user2)
                ->visit(new ShowPage($grammar->id))
                ->dontSeeElement('@edit-comment-btn')
                ->dontSeeElement('@delete-comment-btn')
                ->logout();
        });
    }

    public function userCannotUpdateOrDeleteOtherCommentProvider()
    {
        return [
            'user with right cannot update or delete grammar owner\' comment' => [
                function () {
                    $owner = factory(User::class)->create();
                    list($grammar) = $this->createGrammar($this->getGrammarContent(), [
                        'user_id' => $owner->id,
                    ]);

                    $user = factory(User::class)->create();
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view_comment' => true,
                        'edit' => false,
                        'admin' => false,
                    ]);

                    return [$owner, $user, $grammar];
                },
            ],
            'grammar owner cannot update or delete comment of user with comment right' => [
                function () {
                    $owner = factory(User::class)->create();
                    list($grammar) = $this->createGrammar($this->getGrammarContent(), [
                        'user_id' => $owner->id,
                    ]);

                    $user = factory(User::class)->create();
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view_comment' => true,
                        'edit' => false,
                        'admin' => false,
                    ]);

                    return [$user, $owner, $grammar];
                },
            ],
        ];
    }

    public function testAdminCanUpdateOrDeleteAnyOtherUserComment()
    {
        $this->browse(function (Browser $browser1, Browser $browser2, Browser $browser3) {
            $owner = factory(User::class)->create();
            list($grammar) = $this->createGrammar($this->getGrammarContent(), [
                'user_id' => $owner->id,
            ]);

            $user = factory(User::class)->create();
            factory(Right::class)->create([
                'user_id' => $user->id,
                'grammar_id' => $grammar->id,
                'view_comment' => true,
                'edit' => false,
                'admin' => false,
            ]);

            $admin = factory(User::class, 'admin')->create();

            $browser1
                ->loginAs($owner)
                ->visit(new ShowPage($grammar->id))
                ->commentRow(1, 'Comment1', $owner)
                ->logout();

            $browser2
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->commentRow(1, 'Comment2', $user)
                ->logout();

            $browser3
                ->loginAs($admin)
                ->visit(new ShowPage($grammar->id))
                ->assertElementsCount('@edit-comment-btn', 2)
                ->assertElementsCount('@delete-comment-btn', 2)
                ->logout();
        });
    }
}
