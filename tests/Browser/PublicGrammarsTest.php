<?php

namespace Tests\Browser;

use App\Entities\User;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Grammars\CreatePage;
use Tests\Browser\Pages\Grammars\ShowPage;
use Tests\Browser\Pages\HomePage;
use Tests\DuskTestCase;
use Tests\Traits\DatabaseMigrations;
use Tests\Traits\SudoDatabaseTransactions;

/**
 * @group grammars
 */
class PublicGrammarsTest extends DuskTestCase
{
    use DatabaseMigrations;
    use SudoDatabaseTransactions;

    public function testPublicGrammarVisibleToEveryone()
    {
        $this->browse(function (Browser $browser1, Browser $browser2) {
            $user1 = factory(User::class)->create();
            $user2 = factory(User::class)->create();

            $browser1
                ->loginAs($user1)
                ->visit(new HomePage())
                ->clickLink('Create')
                ->on(new CreatePage())
                ->create(
                    'Grammar Name',
                    $this->getGrammarContent(),
                    'lemon',
                    1,
                    function (Browser $browser) {
                        $browser->check('public_view', 1);
                    }
                )
                ->logout();

            $browser2
                ->loginAs($user2)
                ->visit(new HomePage())
                ->assertSee('Grammar Name')
                ->clickLink('Grammar Name')
                ->on(new ShowPage(1))
                ->assertSee('History')
                ->assertDontSee('Access')
                ->assertDontSee('Edit')
                ->assertDontSee('Delete');
        });
    }

    public function testUserCannotViewNotPublicGrammars()
    {
        $this->browse(function (Browser $browser) {
            $owner = factory(User::class)->create();
            list($grammar) = $this->createGrammar('%name name1', [
                'user_id' => $owner->id,
            ]);
            $user = factory(User::class)->create();

            $browser
                ->loginAs($user)
                ->visit(new HomePage())
                ->assertDontSee($grammar->name)
                ->logout();
        });
    }
}
