<?php

namespace Tests\Browser\Pages\Grammars;

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
}
