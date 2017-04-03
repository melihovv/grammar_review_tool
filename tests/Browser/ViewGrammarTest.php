<?php

namespace Tests\Browser;

use App\Entities\User;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Grammars\ShowPage;
use Tests\DuskTestCase;
use Tests\Traits\DatabaseMigrations;
use Tests\Traits\SudoDatabaseTransactions;

/**
 * @group grammars view-grammar
 */
class ViewGrammarTest extends DuskTestCase
{
    use DatabaseMigrations;
    use SudoDatabaseTransactions;

    /**
     * @param string $type
     * @dataProvider provider
     */
    public function testUserCanViewGrammarWithSyntaxErrors($type)
    {
        $this->browse(function (Browser $browser) use ($type) {
            $user = factory(User::class)->create();
            list($grammar) = $this->createGrammar(
                ',..WTF?',
                 [
                     'user_id' => $user->id,
                 ],
                 $type
            );

            $browser
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->seeElement('@parse-failed')
                ->assertSee('Grammar contains syntax errors')
                ->logout();
        });
    }

    public function provider()
    {
        return [
            [
                'lemon',
            ],
            [
                'bison',
            ],
        ];
    }
}
