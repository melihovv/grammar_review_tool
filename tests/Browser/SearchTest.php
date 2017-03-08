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
 * @group symbols-search
 */
class SearchTest extends DuskTestCase
{
    use DatabaseMigrations;
    use SudoDatabaseTransactions;

    /**
     * @param callable $setupCb
     * @dataProvider commentsProvider
     */
    public function testUserCanSearchSymbols(callable $setupCb)
    {
        $this->browse(function (Browser $browser) use ($setupCb) {
            list($user, $grammar) = $setupCb();

            $browser
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->findRulesWhichContainSymbol(6, 'comment_list')
                ->assertSee('1 of 3')
                ->assertHighlightedLineIs(6)
                ->clickLink('Next')
                ->assertSee('2 of 3')
                ->assertHighlightedLineIs(11)
                ->clickLink('Prev')
                ->assertSee('1 of 3')
                ->assertHighlightedLineIs(6)
                ->clickLink('Prev')
                ->assertSee('3 of 3')
                ->assertHighlightedLineIs(14)
                ->findRulesWhichContainSymbolInLeftSide(6, 'comment_list')
                ->assertSee('1 of 3')
                ->assertHighlightedLineIs(6)
                ->clickLink('Next')
                ->assertSee('2 of 3')
                ->assertHighlightedLineIs(11)
                ->clickLink('Next')
                ->assertSee('3 of 3')
                ->assertHighlightedLineIs(14)
                ->findRulesWithTheSameRightSide(11, 'comment_list')
                ->assertSee('1 of 2')
                ->assertHighlightedLineIs(11)
                ->clickLink('Next')
                ->assertSee('2 of 2')
                ->assertHighlightedLineIs(14)
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
}
