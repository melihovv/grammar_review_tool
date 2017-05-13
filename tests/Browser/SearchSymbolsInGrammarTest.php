<?php

namespace Tests\Browser;

use App\Entities\Right;
use App\Entities\User;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Grammars\ShowPage;
use Tests\DuskTestCase;
use Tests\Traits\DatabaseMigrations;
use Tests\Traits\SudoDatabaseTransactions;

/**
 * @group grammars symbols-search
 */
class SearchSymbolsInGrammarTest extends DuskTestCase
{
    use DatabaseMigrations;
    use SudoDatabaseTransactions;

    /**
     * @param callable $setupCb
     * @dataProvider lemonSearchProvider
     */
    public function testUserCanSearchSymbolsInLemonGrammar(callable $setupCb)
    {
        $this->browse(function (Browser $browser) use ($setupCb) {
            list($user, $grammar) = $setupCb();

            $browser
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->findRulesWhichContainSymbol(6, 'comment_list')
                ->assertSee('1 of 3')
                ->assertHighlightedLineIs(6)
                ->clickLink('Next')
                ->assertSee('2 of 3')
                ->assertHighlightedLineIs(11)
                ->clickLink('Prev')
                ->assertSee('1 of 3')
                ->assertHighlightedLineIs(6)
                ->clickLink('Prev')
                ->assertSee('3 of 3')
                ->assertHighlightedLineIs(14)
                ->findRulesWhichContainSymbolInLeftSide(6, 'comment_list')
                ->assertSee('1 of 3')
                ->assertHighlightedLineIs(6)
                ->clickLink('Next')
                ->assertSee('2 of 3')
                ->assertHighlightedLineIs(11)
                ->clickLink('Next')
                ->assertSee('3 of 3')
                ->assertHighlightedLineIs(14)
                ->findRulesWithTheSameRightSide(11, 'comment_list')
                ->assertSee('1 of 2')
                ->assertHighlightedLineIs(11)
                ->clickLink('Next')
                ->assertSee('2 of 2')
                ->assertHighlightedLineIs(14)
                ->logout();
        });
    }

    public function lemonSearchProvider()
    {
        return [
            'grammar owner' => [
                function () {
                    $user = factory(User::class)->create();
                    list($grammar) = $this->createGrammar(
                        $this->getGrammarContent('lemon'),
                        [
                            'user_id' => $user->id,
                        ]
                    );

                    return [$user, $grammar];
                },
            ],
            'admin' => [
                function () {
                    $user = factory(User::class, 'admin')->create();
                    list($grammar) = $this->createGrammar(
                        $this->getGrammarContent('lemon')
                    );

                    return [$user, $grammar];
                },
            ],
            'user with comment right' => [
                function () {
                    $user = factory(User::class)->create();
                    list($grammar) = $this->createGrammar(
                        $this->getGrammarContent('lemon')
                    );
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view_comment' => true,
                        'edit' => false,
                        'admin' => false,
                    ]);

                    return [$user, $grammar];
                },
            ],
            'public grammar' => [
                function () {
                    $user = factory(User::class)->create();
                    list($grammar) = $this->createGrammar(
                        $this->getGrammarContent('lemon'),
                        [
                            'public_view' => true,
                        ]
                    );

                    return [$user, $grammar];
                },
            ],
        ];
    }

    /**
     * @param callable $setupCb
     * @dataProvider bisonSearchProvider
     */
    public function testUserCanSearchSymbolsInBisonGrammar(callable $setupCb)
    {
        $this->browse(function (Browser $browser) use ($setupCb) {
            list($user, $grammar) = $setupCb();

            $browser
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->findRulesWhichContainSymbol(3, 'a')
                ->assertSee('1 of 2')
                ->assertHighlightedLineIs(3)
                ->clickLink('Next')
                ->assertSee('2 of 2')
                ->assertHighlightedLineIs(7)
                ->clickLink('Prev')
                ->assertSee('1 of 2')
                ->assertHighlightedLineIs(3)
                ->clickLink('Prev')
                ->assertSee('2 of 2')
                ->assertHighlightedLineIs(7)
                ->findRulesWhichContainSymbolInLeftSide(7, 'bbbb')
                ->assertSee('1 of 1')
                ->assertHighlightedLineIs(7)
                ->clickLink('Next')
                ->assertSee('1 of 1')
                ->assertHighlightedLineIs(7)
                ->findRulesWithTheSameRightSide(3, 'a')
                ->assertSee('1 of 3')
                ->assertHighlightedLineIs(3)
                ->clickLink('Next')
                ->assertSee('2 of 3')
                ->assertHighlightedLineIs(7)
                ->clickLink('Next')
                ->assertSee('3 of 3')
                ->assertHighlightedLineIs(11)
                ->logout();
        });
    }

    public function bisonSearchProvider()
    {
        return [
            'grammar owner' => [
                function () {
                    $user = factory(User::class)->create();
                    list($grammar) = $this->createGrammar(
                        $this->getGrammarContent('bison'),
                        [
                            'user_id' => $user->id,
                        ],
                        'bison'
                    );

                    return [$user, $grammar];
                },
            ],
            'admin' => [
                function () {
                    $user = factory(User::class, 'admin')->create();
                    list($grammar) = $this->createGrammar(
                        $this->getGrammarContent('bison'),
                        [],
                        'bison'
                    );

                    return [$user, $grammar];
                },
            ],
            'user with comment right' => [
                function () {
                    $user = factory(User::class)->create();
                    list($grammar) = $this->createGrammar(
                        $this->getGrammarContent('bison'),
                        [],
                        'bison'
                    );
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view_comment' => true,
                        'edit' => false,
                        'admin' => false,
                    ]);

                    return [$user, $grammar];
                },
            ],
            'public grammar' => [
                function () {
                    $user = factory(User::class)->create();
                    list($grammar) = $this->createGrammar(
                        $this->getGrammarContent('bison'),
                        [
                            'public_view' => true,
                        ],
                        'bison'
                    );

                    return [$user, $grammar];
                },
            ],
        ];
    }
}
