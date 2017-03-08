<?php

namespace Tests\Browser;

use App\Entities\User;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Grammars\CreatePage;
use Tests\Browser\Pages\Grammars\EditPage;
use Tests\Browser\Pages\Grammars\HistoryPage;
use Tests\Browser\Pages\Grammars\ShowPage;
use Tests\Browser\Pages\HomePage;
use Tests\DuskTestCase;
use Tests\Traits\DatabaseMigrations;
use Tests\Traits\SudoDatabaseTransactions;

class CommentsTest extends DuskTestCase
{
    use DatabaseMigrations;
    use SudoDatabaseTransactions;

    public function testUserCanComment()
    {
        $this->browse(function (Browser $browser) {
            $user = factory(User::class)->create();
            list($grammar) = $this->createGrammar($this->getGrammarContent(), [
                'user_id' => $user->id,
            ]);

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
}
