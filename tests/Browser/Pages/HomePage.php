<?php

namespace Tests\Browser\Pages;

use Laravel\Dusk\Browser;

class HomePage extends Page
{
    public function url()
    {
        return route('grammars.index');
    }

    public function assert(Browser $browser)
    {
        $browser->assertSee(config('app.name'));
    }

    public function elements()
    {
        return [
            '@create-new-button' => '.navbar-right .dropdown:first-child .dropdown-toggle:first-child',
            '@profile-dropdown' => '.navbar-right .dropdown:nth-child(2) .dropdown-toggle:first-child',
        ];
    }
}
