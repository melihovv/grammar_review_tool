<?php

namespace Tests\Browser\Pages\Grammars;

use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Page;

class HistoryPage extends Page
{
    public function __construct($id)
    {
        $this->url = route('grammars.history', $id);
    }

    public function elements()
    {
        return [
            '@active-version' => '.list-group-item.active a',
        ];
    }

    public function clickVersion(Browser $browser, $version)
    {
        $browser->click("a[href$='version=$version']");
    }
}
