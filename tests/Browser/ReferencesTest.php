<?php

namespace Tests\Browser;

use App\Entities\User;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Grammars\ShowPage;
use Tests\DuskTestCase;
use Tests\Traits\DatabaseMigrations;
use Tests\Traits\SudoDatabaseTransactions;

/**
 * @group grammars references
 */
class ReferencesTest extends DuskTestCase
{
    use DatabaseMigrations;
    use SudoDatabaseTransactions;

    /**
     * @group wip
     */
    public function testUserCanReferenceTheGrammarLine()
    {
        $this->browse(function (Browser $browser) {
            $user = factory(User::class)->create();
            list($grammar) = $this->createGrammar(str_repeat($this->getGrammarContent(), 3), [
                'user_id' => $user->id,
            ]);

            $browser
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->clickLineNumber(6)
                ->seeElement('@highlighted')
                ->assertHashIs('L6')
                ->logout();
        });
    }
}
