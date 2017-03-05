<?php

namespace Tests\Browser;

use App\Entities\User;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\HomePage;
use Tests\DuskTestCase;
use Tests\Traits\DatabaseMigrations;
use Tests\Traits\SudoDatabaseTransactions;

class HomeTest extends DuskTestCase
{
    use DatabaseMigrations;
    use SudoDatabaseTransactions;

    public function testHome()
    {
        $this->browse(function (Browser $browser) {
            $user = factory(User::class)->create();

            $browser
                ->loginAs($user)
                ->visit(new HomePage())
                ->assertSee('Grammars')
                ->assertSee('Create')
                ->assertSee('You have no grammar to view. Create one?')
                ->assertSee($user->name)
                ->click('@create-new-button')
                ->assertSee('New grammar')
                ->click('@profile-dropdown')
                ->assertSee('Logout')
                ->logout();
        });
    }
}
