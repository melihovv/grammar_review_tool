<?php

namespace Tests\Browser\Pages\Grammars;

use Facebook\WebDriver\WebDriverBy;
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

    public function commentRow(Browser $browser, $row, $comment, $user)
    {
        $browser
            ->mouseover("tr[data-row='$row'] .grammar-view__add-comment-to-row-leftside-button")
            ->click("tr[data-row='$row'] .grammar-view__add-comment-to-row-leftside-button")
            ->keys('.grammar-view__comment-form textarea', $comment)
            ->click('.grammar-view__comment-form .grammar-view__add-comment-button')
            ->waitUntilMissing("tr[data-row='$row'] + tr .grammar-view__cancel-button")
            ->with(
                "tr[data-row='$row'] + tr",
                function (Browser $browser) use ($user, $comment, $row) {
                    $count = count($browser->elements('.grammar-view__comment-holder'));
                    $browser->with(
                        ".grammar-view__comment-holder:nth-child($count)",
                        function (Browser $browser) use ($user, $comment) {
                            $browser
                                ->assertSee($user->name)
                                ->assertSee($comment);
                        }
                    );
                }
            );
    }

    public function commentSymbol(Browser $browser, $row, $symbol, $comment, $user)
    {
        $symbolXpath = "//tr[@data-row='$row']//span[contains(@class, 'grammar-view__symbol') and text()='$symbol']";
        $symbolCommentsXpath = "$symbolXpath/following-sibling::div[contains(@class, 'grammar-view__symbol-comments')]";
        $addedCommentHolderXpath = "($symbolCommentsXpath/div[contains(@class, 'grammar-view__comment-holder')])[last()]";
        $commentButtonXpath = "$symbolCommentsXpath/a[contains(@class, 'grammar-view__add-comment-to-row-button')]";

        $commentButton = $browser->element(WebDriverBy::xpath($commentButtonXpath));
        if ($commentButton && $commentButton->isDisplayed()) {
            $browser->click(WebDriverBy::xpath($commentButtonXpath));
        } else {
            $browser->click(WebDriverBy::xpath($symbolXpath));
        }

        $browser
            ->keys('.grammar-view__comment-form textarea', $comment)
            ->click('.grammar-view__comment-form .grammar-view__add-comment-button')
            ->waitFor(WebDriverBy::xpath($commentButtonXpath))
            ->seeElement(WebDriverBy::xpath("$addedCommentHolderXpath/div[contains(@class, 'grammar-view__comment-content') and text()='$comment']"))
            ->seeElement(WebDriverBy::xpath("$addedCommentHolderXpath/div[contains(@class, 'grammar-view__comment-header') and contains(text(), '$user->name')]"));
    }
}
