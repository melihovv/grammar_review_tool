<?php

namespace Tests\Browser;

use App\Entities\User;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Grammars\HistoryPage;
use Tests\Browser\Pages\Grammars\ShowPage;
use Tests\DuskTestCase;
use Tests\Traits\DatabaseMigrations;
use Tests\Traits\SudoDatabaseTransactions;

class HistoryTest extends DuskTestCase
{
    use DatabaseMigrations;
    use SudoDatabaseTransactions;

    public function testUserCanSeeHistoryOfGrammarVersions()
    {
        $this->browse(function (Browser $browser) {
            $user = factory(User::class)->create();
            list($grammar) = $this->createGrammar('%name name1', [
                'user_id' => $user->id,
            ]);
            $this->updateGrammar($grammar, '%name name2', $user);

            $browser
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->clickLink('History')
                ->on(new HistoryPage($grammar->id))
                ->assertSee($user->name)
                ->click('@active-version')
                ->on(new ShowPage($grammar->id))
                ->assertQueryStringHas('version', 1)
                ->assertDontSee('You are looking at early version of grammar. Click here to view the latest version.')
                ->clickLink('History')
                ->on(new HistoryPage($grammar->id))
                ->clickVersion(0)
                ->on(new ShowPage($grammar->id))
                ->assertQueryStringHas('version', 0)
                ->assertSee('You are looking at early version of grammar. Click here to view the latest version.')
                ->clickLink('here')
                ->on(new ShowPage($grammar->id))
                ->assertQueryStringMissing('version')
                ->logout();
        });
    }
}
