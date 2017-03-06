<?php

namespace Tests\Browser\Pages\Grammars;

use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Page;

class CreatePage extends Page
{
    public function url()
    {
        return route('grammars.create');
    }

    public function elements()
    {
        return [
            '@name' => 'input[name=name]',
            '@content' => 'textarea',
        ];
    }

    public function create(Browser $browser, $name, $content, $id, callable $cb = null)
    {
        $browser
            ->type('@name', $name)
            ->type('@content', $content);

        if ($cb) {
            $cb($browser);
        }

        $browser
            ->press('Create')
            ->assertRouteIs('grammars.show', $id)
            ->waitForText($name);
    }
}
