<?php

namespace Tests\Browser;

use App\Entities\User;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Grammars\ShowPage;
use Tests\DuskTestCase;
use Tests\Traits\DatabaseMigrations;
use Tests\Traits\SudoDatabaseTransactions;

class SearchTest extends DuskTestCase
{
    use DatabaseMigrations;
    use SudoDatabaseTransactions;

    public function testUserCanSearchSymbols()
    {
        $this->browse(function (Browser $browser) {
            $user = factory(User::class)->create();
            list($grammar) = $this->createGrammar($this->getGrammarContent(), [
                'user_id' => $user->id,
            ]);

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
}
