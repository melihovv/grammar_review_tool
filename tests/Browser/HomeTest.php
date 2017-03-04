<?php

namespace Tests\Browser;

use App\Entities\User;
use Tests\Browser\Pages\HomePage;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class HomeTest extends DuskTestCase
{
    use DatabaseMigrations;

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
