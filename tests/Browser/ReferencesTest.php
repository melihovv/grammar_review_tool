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

    public function testUserCanReferenceTheComment()
    {
        $this->browse(function (Browser $browser) {
            $user = factory(User::class)->create([
                'name' => str_random(3),
            ]);
            list($grammar) = $this->createGrammar(str_repeat($this->getGrammarContent(), 3), [
                'user_id' => $user->id,
            ]);

            $browser
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->commentSymbol(6, 'COMMENT', 'Comment1', $user)
                ->doubleClick($browser->element('.grammar-view__comment-header'))
                ->seeElement('@highlighted')
                ->assertHashIs('comment-1')
                ->pause(1000)
                ->click('.grammar-view__delete-comment')
                ->commentRow(7, 'Comment2', $user)
                ->doubleClick($browser->element(' .grammar-view__comment-header'))
                ->seeElement('@highlighted')
                ->assertHashIs('comment-2')
                ->logout();
        });
    }
}
