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
        parent::assert($browser);

        $browser->assertSee(config('app.name'));
    }
}
