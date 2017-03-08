<?php

namespace Tests\Browser;

use App\Entities\Right;
use App\Entities\User;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Grammars\HistoryPage;
use Tests\Browser\Pages\Grammars\ShowPage;
use Tests\DuskTestCase;
use Tests\Traits\DatabaseMigrations;
use Tests\Traits\SudoDatabaseTransactions;

/**
 * @group grammar-history
 */
class HistoryTest extends DuskTestCase
{
    use DatabaseMigrations;
    use SudoDatabaseTransactions;

    /**
     * @param callable $setupCb
     * @dataProvider historyProvider
     */
    public function testUserCanSeeHistoryOfGrammarVersions(callable $setupCb)
    {
        $this->browse(function (Browser $browser) use ($setupCb) {
            list($user, $owner, $updater, $grammar) = $setupCb();

            $browser
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->clickLink('History')
                ->on(new HistoryPage($grammar->id))
                ->assertSee($user->name)
                ->assertSee($updater->name)
                ->click('@active-version')
                ->on(new ShowPage($grammar->id))
                ->assertQueryStringHas('version', 1)
                ->assertDontSee('You are looking at early version of grammar. Click here to view the latest version.')
                ->clickLink('History')
                ->on(new HistoryPage($grammar->id))
                ->clickVersion(0)
                ->on(new ShowPage($grammar->id))
                ->assertQueryStringHas('version', 0)
                ->assertSee('You are looking at early version of grammar. Click here to view the latest version.')
                ->clickLink('here')
                ->on(new ShowPage($grammar->id))
                ->assertQueryStringMissing('version')
                ->logout();
        });
    }

    public function historyProvider()
    {
        return [
            'grammar owner' => [
                function () {
                    $owner = factory(User::class)->create();
                    $updater = factory(User::class)->create();
                    list($grammar) = $this->createGrammar('%name name1', [
                        'user_id' => $owner->id,
                    ]);
                    $this->updateGrammar($grammar, '%name name2', $updater);

                    return [$owner, $owner, $updater, $grammar];
                },
            ],
            'admin' => [
                function () {
                    $admin = factory(User::class, 'admin')->create();
                    $owner = factory(User::class)->create();
                    $updater = factory(User::class)->create();
                    list($grammar) = $this->createGrammar('%name name1', [
                        'user_id' => $owner->id,
                    ]);
                    $this->updateGrammar($grammar, '%name name2', $updater);

                    return [$admin, $owner, $updater, $grammar];
                },
            ],
            'user with comment right' => [
                function () {
                    $owner = factory(User::class)->create();
                    $updater = factory(User::class)->create();
                    list($grammar) = $this->createGrammar('%name name1', [
                        'user_id' => $owner->id,
                    ]);
                    $this->updateGrammar($grammar, '%name name2', $updater);

                    $user = factory(User::class)->create();
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view_comment' => true,
                        'edit' => false,
                        'admin' => false,
                    ]);

                    return [$user, $owner, $updater, $grammar];
                },
            ],
            'public grammar' => [
                function () {
                    $owner = factory(User::class)->create();
                    $updater = factory(User::class)->create();
                    list($grammar) = $this->createGrammar('%name name1', [
                        'user_id' => $owner->id,
                        'public_view' => true,
                    ]);
                    $this->updateGrammar($grammar, '%name name2', $updater);

                    $user = factory(User::class)->create();

                    return [$user, $owner, $updater, $grammar];
                },
            ],
        ];
    }
}
