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
                ->on(new CreatePage())
                ->create('Grammar Name', $this->getGrammarContent(), 1)
                ->logout();
        });
    }

    public function testUserCannotCreateGrammarWithSyntaxErrors()
    {
        $this->browse(function (Browser $browser) {
            $user = factory(User::class)->create();

            $browser
                ->loginAs($user)
                ->visit(new HomePage())
                ->clickLink('Create')
                ->on(new CreatePage())
                ->type('@content', ',%>WTF<%,')
                ->press('Create')
                ->seeElement('@syntax-errors')
                ->assertSee('mismatched input')
                ->create('Grammar Name', $this->getGrammarContent(), 1)
                ->logout();
        });
    }

    public function testUserCanCreateGrammarThroughCreateNewButton()
    {
        $this->browse(function (Browser $browser) {
            $user = factory(User::class)->create();

            $browser
                ->loginAs($user)
                ->visit(new HomePage())
                ->click('@create-new-button')
                ->clickLink('New grammar')
                ->on(new CreatePage())
                ->create('Grammar Name', $this->getGrammarContent(), 1)
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
                ->visit(new ShowPage($grammar->id))
                ->clickLink('Edit')
                ->on(new EditPage($grammar->id))
                ->update('Grammar Name2', '%name name2', $grammar->id)
                ->logout();
        });
    }

    public function testUserCannotUpdateGrammarWithSyntaxErrors()
    {
        $this->browse(function (Browser $browser) {
            $user = factory(User::class)->create();
            list($grammar) = $this->createGrammar('%name name1', [
                'user_id' => $user->id,
            ]);

            $browser
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->clickLink('Edit')
                ->on(new EditPage($grammar->id))
                ->type('@content', 'fjlskdjflksdfhsf,.')
                ->press('Update')
                ->seeElement('@syntax-errors')
                ->assertSee('mismatched input')
                ->update('Grammar Name2', '%name name2', $grammar->id)
                ->logout();
        });
    }

    public function testUserCanDeleteGrammar()
    {
        $this->browse(function (Browser $browser) {
            $user = factory(User::class)->create();
            list($grammar) = $this->createGrammar('%name name1', [
                'user_id' => $user->id,
            ]);

            $browser
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->clickLink('Delete')
                ->on(new HomePage())
                ->assertDontSee($grammar->name)
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
                ->on(new CreatePage())
                ->create(
                    'Grammar Name',
                    $this->getGrammarContent(),
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
