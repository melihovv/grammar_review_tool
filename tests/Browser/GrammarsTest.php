<?php

namespace Tests\Browser;

use App\Entities\User;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Grammars\CreatePage;
use Tests\Browser\Pages\Grammars\EditPage;
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

    public function testUserCanViewGrammarWithSyntaxErrors()
    {
        $this->browse(function (Browser $browser) {
            $user = factory(User::class)->create();
            list($grammar) = $this->createGrammar(',..WTF?', [
                'user_id' => $user->id,
            ]);

            $browser
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->seeElement('@parse-failed')
                ->assertSee('Grammar contains syntax errors')
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
