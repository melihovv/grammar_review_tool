<?php

namespace Tests\Browser;

use Facebook\WebDriver\WebDriverBy;

class ElementResolver extends \Laravel\Dusk\ElementResolver
{
    public function findOrFail($selector)
    {
        return $this->driver->findElement(
            (is_string($selector))
                ? WebDriverBy::cssSelector($this->format($selector))
                : $selector
        );
    }
}
