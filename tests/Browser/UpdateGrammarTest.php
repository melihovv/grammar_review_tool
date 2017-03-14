<?php

namespace Tests\Browser;

use App\Entities\Right;
use App\Entities\User;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Grammars\EditPage;
use Tests\Browser\Pages\Grammars\ShowPage;
use Tests\DuskTestCase;
use Tests\Traits\DatabaseMigrations;
use Tests\Traits\SudoDatabaseTransactions;

/**
 * @group grammars update-grammar
 */
class UpdateGrammarTest extends DuskTestCase
{
    use DatabaseMigrations;
    use SudoDatabaseTransactions;

    public function usersCanProvider()
    {
        return [
            'grammar owner' => [
                function () {
                    $owner = factory(User::class)->create();
                    list($grammar) = $this->createGrammar('%name name1', [
                        'user_id' => $owner->id,
                    ]);

                    return [$owner, $grammar];
                },
            ],
            'admin' => [
                function () {
                    $admin = factory(User::class, 'admin')->create();
                    list($grammar) = $this->createGrammar('%name name1');

                    return [$admin, $grammar];
                },
            ],
            'user with edit right' => [
                function () {
                    list($grammar) = $this->createGrammar('%name name1');
                    $user = factory(User::class)->create();
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view_comment' => false,
                        'edit' => true,
                        'admin' => false,
                    ]);

                    return [$user, $grammar];
                },
            ],
            'user with admin right' => [
                function () {
                    list($grammar) = $this->createGrammar('%name name1');
                    $user = factory(User::class)->create();
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view_comment' => false,
                        'edit' => false,
                        'admin' => true,
                    ]);

                    return [$user, $grammar];
                },
            ],
        ];
    }

    /**
     * @dataProvider usersCanProvider
     *
     * @param callable $setupCb
     */
    public function testUserCanUpdateGrammar(callable $setupCb)
    {
        $this->browse(function (Browser $browser) use ($setupCb) {
            list($user, $grammar) = $setupCb();

            $browser
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->clickLink('Edit')
                ->on(new EditPage($grammar->id))
                ->update('Grammar Name2', '%name name2', $grammar->id)
                ->logout();
        });
    }

    /**
     * @dataProvider usersCanProvider
     *
     * @param callable $setupCb
     */
    public function testUserCannotUpdateGrammarWithSyntaxErrors(callable $setupCb)
    {
        $this->browse(function (Browser $browser) use ($setupCb) {
            list($user, $grammar) = $setupCb();

            $browser
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->clickLink('Edit')
                ->on(new EditPage($grammar->id))
                ->type('@content', 'fjlskdjflksdfhsf,.')
                ->press('Update')
                ->seeElement('@syntax-errors')
                ->assertSee('mismatched input')
                ->update('Grammar Name2', '%name name2', $grammar->id)
                ->logout();
        });
    }

    public function usersCannotProvider()
    {
        return [
            'user with view&comment right' => [
                function () {
                    list($grammar) = $this->createGrammar('%name name1');
                    $user = factory(User::class)->create();
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
        ];
    }

    /**
     * @param callable $setupCb
     * @dataProvider usersCannotProvider
     */
    public function testUserCannotUpdateGrammar(callable $setupCb)
    {
        $this->browse(function (Browser $browser) use ($setupCb) {
            list($user, $grammar) = $setupCb();

            $browser
                ->loginAs($user)
                ->visit(new ShowPage($grammar->id))
                ->assertDontSee('Edit')
                ->logout();
        });
    }
}
