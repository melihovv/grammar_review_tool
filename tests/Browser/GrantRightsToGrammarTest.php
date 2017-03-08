<?php

namespace Tests\Browser;

use App\Entities\Right;
use App\Entities\User;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Grammars\ShowPage;
use Tests\Browser\Pages\HomePage;
use Tests\DuskTestCase;
use Tests\Traits\DatabaseMigrations;
use Tests\Traits\SudoDatabaseTransactions;

/**
 * @group grammars rights
 */
class GrantRightsToGrammarTest extends DuskTestCase
{
    use DatabaseMigrations;
    use SudoDatabaseTransactions;

    /**
     * @param callable $setupCb
     * @dataProvider rightsProvider
     */
    public function testUserCanGrantRightsToOtherUsers(callable $setupCb)
    {
        $this->browse(function (Browser $browser1, Browser $browser2) use ($setupCb) {
            list($user, $userForRightGrant, $searchBy, $grammar) = $setupCb();

            $browser1
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->clickLink('Access')
                ->whenAvailable(
                    '@rights-modal',
                    function (Browser $modal) use ($userForRightGrant, $searchBy) {
                        $modal
                            ->assertSee('Grammar access')
                            ->assertSee('Grant access')
                            ->type('.multiselect__input', $searchBy)
                            ->pause(3000)
                            ->keys('.multiselect__input', '{enter}')
                            ->press('Grant')
                            ->assertSee($userForRightGrant->name);
                    }
                )
                ->logout();

            $browser2
                ->loginAs($user)
                ->visit(new HomePage())
                ->assertSee($grammar->name);
        });
    }

    public function rightsProvider()
    {
        return [
            'grammar owner' => [
                function () {
                    $owner = factory(User::class)->create();
                    list($grammar) = $this->createGrammar($this->getGrammarContent(), [
                        'user_id' => $owner->id,
                    ]);

                    $user = factory(User::class)->create();

                    return [$owner, $user, $user->name, $grammar];
                },
            ],
            'admin' => [
                function () {
                    $admin = factory(User::class, 'admin')->create();
                    list($grammar) = $this->createGrammar($this->getGrammarContent());

                    $user = factory(User::class)->create();

                    return [$admin, $user, $user->email, $grammar];
                },
            ],
            'user with admin right' => [
                function () {
                    $userWithRight = factory(User::class)->create();
                    list($grammar) = $this->createGrammar($this->getGrammarContent());
                    factory(Right::class)->create([
                        'user_id' => $userWithRight->id,
                        'grammar_id' => $grammar->id,
                        'view_comment' => false,
                        'edit' => false,
                        'admin' => true,
                    ]);

                    $user = factory(User::class)->create();

                    return [$userWithRight, $user, $user->email, $grammar];
                },
            ],
        ];
    }
}
