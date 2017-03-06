<?php

namespace Tests\Browser;

use App\Entities\User;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\HomePage;
use Tests\DuskTestCase;
use Tests\Traits\DatabaseMigrations;
use Tests\Traits\SudoDatabaseTransactions;

class GrammarsTest extends DuskTestCase
{
    use DatabaseMigrations;
    use SudoDatabaseTransactions;

    public function testUserCanCreateGrammar()
    {
        $this->browse(function (Browser $browser) {
            $user = factory(User::class)->create();

            $browser
                ->loginAs($user)
                ->visit(new HomePage())
                ->clickLink('Create')
                ->type('name', 'Grammar Name')
                ->type('textarea', $this->getGrammarContent())
                ->press('Create')
                ->assertRouteIs('grammars.show', 1)
                ->waitForText('Grammar Name')
                ->logout();
        });
    }

    public function testUserCanUpdateGrammar()
    {
        $this->browse(function (Browser $browser) {
            $user = factory(User::class)->create();
            list($grammar) = $this->createGrammar('%name name1', [
                'user_id' => $user->id,
            ]);

            $browser
                ->loginAs($user)
                ->visit(route('grammars.show', $grammar->id))
                ->clickLink('Edit')
                ->type('name', 'Grammar Name2')
                ->type('textarea', '%name name2')
                ->press('Update')
                ->assertRouteIs('grammars.show', $grammar->id)
                ->waitForText('Grammar Name2')
                ->assertSee('%name name2')
                ->logout();
        });
    }

    public function testUserCanDeleteGrammar()
    {
        $this->browse(function (Browser $browser) {
            $user = factory(User::class)->create();
            list($grammar) = $this->createGrammar('%name name1', [
                'user_id' => $user->id,
                'name' => 'Grammar Name',
            ]);

            $browser
                ->loginAs($user)
                ->visitRoute('grammars.show', $grammar->id)
                ->waitForText('Grammar Name')
                ->clickLink('Delete')
                ->assertRouteIs('grammars.index')
                ->assertDontSee('Grammar Name')
                ->logout();
        });
    }

    public function testPublicGrammarVisibleToEveryone()
    {
        $this->browse(function (Browser $browser1, Browser $browser2) {
            $user1 = factory(User::class)->create();
            $user2 = factory(User::class)->create();

            $browser1
                ->loginAs($user1)
                ->visit(new HomePage())
                ->clickLink('Create')
                ->type('name', 'Grammar Name')
                ->type('textarea', $this->getGrammarContent())
                ->check('public_view', 1)
                ->press('Create')
                ->assertRouteIs('grammars.show', 1)
                ->waitForText('Grammar Name')
                ->logout();

            $browser2
                ->loginAs($user2)
                ->visit(new HomePage())
                ->assertSee('Grammar Name');
        });
    }

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
                ->visit(route('grammars.show', $grammar->id))
                ->clickLink('History')
                ->assertRouteIs('grammars.history', $grammar->id)
                ->waitForText('Show')
                ->assertSee($user->name)
                ->click('.list-group-item.active a')
                ->assertRouteIs('grammars.show', $grammar->id)
                ->assertQueryStringHas('version', 1)
                ->assertDontSee('You are looking at early version of grammar. Click here to view the latest version.')
                ->clickLink('History')
                ->waitForText('Show')
                ->click('.list-group-item:nth-child(3) a')
                ->assertRouteIs('grammars.show', $grammar->id)
                ->assertQueryStringHas('version', 0)
                ->assertSee('You are looking at early version of grammar. Click here to view the latest version.')
                ->clickLink('here')
                ->assertRouteIs('grammars.show', $grammar->id)
                ->assertQueryStringMissing('version')
                ->logout();
        });
    }

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
                ->visit(route('grammars.show', $grammar->id))
                ->clickLink('Access')
                ->whenAvailable(
                    '#manage-grammar-rights-modal',
                    function (Browser $modal) use ($userWithRight) {
                        $modal
                            ->assertSee('Grammar access')
                            ->assertSee('Grant access')
                            ->type('input', $userWithRight->name)
                            ->pause(3000)
                            ->keys('input', '{enter}')
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
