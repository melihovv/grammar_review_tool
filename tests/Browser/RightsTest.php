<?php

namespace Tests\Browser;

use App\Entities\User;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Grammars\ShowPage;
use Tests\Browser\Pages\HomePage;
use Tests\DuskTestCase;
use Tests\Traits\DatabaseMigrations;
use Tests\Traits\SudoDatabaseTransactions;

class RightsTest extends DuskTestCase
{
    use DatabaseMigrations;
    use SudoDatabaseTransactions;

    public function testUserCanGrantRightsToOtherUsers()
    {
        $this->browse(function (Browser $browser1, Browser $browser2) {
            $owner = factory(User::class)->create();
            $userWithRight = factory(User::class)->create();
            list($grammar) = $this->createGrammar('%name name1', [
                'user_id' => $owner->id,
                'public_view' => false,
            ]);

            $browser1
                ->loginAs($owner)
                ->visit(new ShowPage($grammar->id))
                ->clickLink('Access')
                ->whenAvailable(
                    '@rights-modal',
                    function (Browser $modal) use ($userWithRight) {
                        $modal
                            ->assertSee('Grammar access')
                            ->assertSee('Grant access')
                            ->type('.multiselect__input', $userWithRight->name)
                            ->pause(3000)
                            ->keys('.multiselect__input', '{enter}')
                            ->press('Grant')
                            ->assertSee($userWithRight->name);
                    }
                )
                ->logout();

            $browser2
                ->loginAs($userWithRight)
                ->visit(new HomePage())
                ->assertSee($grammar->name);
        });
    }
}
