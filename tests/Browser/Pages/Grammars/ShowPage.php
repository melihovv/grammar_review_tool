<?php

namespace Tests\Browser\Pages\Grammars;

use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Page;

class ShowPage extends Page
{
    public function __construct($id)
    {
        $this->url = route('grammars.show', $id);
    }

    public function elements()
    {
        return [
            '@rights-modal' => '#manage-grammar-rights-modal',
        ];
    }

    public function assert(Browser $browser)
    {
        parent::assert($browser);

        if (!$this->modalIsDisplayed($browser)) {
            $browser->waitUntilMissing('.loader');
        }
    }
}
