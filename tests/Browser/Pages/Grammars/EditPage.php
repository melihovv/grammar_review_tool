<?php

namespace Tests\Browser\Pages\Grammars;

use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Page;

class EditPage extends Page
{
    public function __construct($id)
    {
        $this->url = route('grammars.edit', $id);
    }

    public function elements()
    {
        return [
            '@name' => 'input[name=name]',
            '@content' => 'textarea',
        ];
    }

    public function update(Browser $browser, $name, $content, $id)
    {
        $browser
            ->type('@name', $name)
            ->type('@content', $content)
            ->press('Update')
            ->assertRouteIs('grammars.show', $id)
            ->waitForText($name);
    }
}
