<?php

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Entities\Right;
use App\Entities\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class UserTest extends DatabaseTestCase
{
    use DatabaseMigrations;

    /**
     * @dataProvider isOwnerProvider
     */
    public function testIsOwner($cb, $isOwner)
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();
        $cb($user, $grammar);

        $this->assertEquals($isOwner, $user->isOwner($grammar));
    }

    public function isOwnerProvider()
    {
        return [
            'user is owner of grammar' => [
                function ($user, $grammar) {
                    $grammar->update(['owner' => $user->id]);
                },
                true,
            ],
            'user is not owner of grammar' => [
                function ($user, $grammar) {
                },
                false,
            ],
        ];
    }

    /**
     * @dataProvider hasRightProvider
     */
    public function testHasRight($cb, $right, $requireAll, $hasRight)
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();
        $cb($user, $grammar);

        $this->assertEquals(
            $hasRight,
            $user->hasRight($right, $grammar, $requireAll)
        );
    }

    public function hasRightProvider()
    {
        return [
            'right is empty string' => [
                function ($user, $grammar) {
                },
                '',
                false,
                false,
            ],
            'right is empty array' => [
                function ($user, $grammar) {
                },
                [],
                false,
                false,
            ],
            'user has no right to view grammar, requireAll is false' => [
                function ($user, $grammar) {
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view' => false,
                    ]);
                },
                'view',
                false,
                false,
            ],
            'user has no right to view grammar, requireAll is true' => [
                function ($user, $grammar) {
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view' => false,
                    ]);
                },
                'view',
                true,
                false,
            ],
            'user has right to view grammar, requireAll is false' => [
                function ($user, $grammar) {
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view' => true,
                    ]);
                },
                'view',
                false,
                true,
            ],
            'user has right to view grammar, requireAll is true' => [
                function ($user, $grammar) {
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view' => true,
                    ]);
                },
                'view',
                true,
                true,
            ],
            'user has not any right, requireAll is false' => [
                function ($user, $grammar) {
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view' => false,
                        'comment' => false,
                    ]);
                },
                ['view', 'comment'],
                false,
                false,
            ],
            'user has not any right, requireAll is true' => [
                function ($user, $grammar) {
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view' => false,
                        'comment' => false,
                    ]);
                },
                ['view', 'comment'],
                true,
                false,
            ],
            'user has one right, requireAll is false' => [
                function ($user, $grammar) {
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view' => true,
                        'comment' => false,
                    ]);
                },
                ['view', 'comment'],
                false,
                true,
            ],
            'user has one right, requireAll is true' => [
                function ($user, $grammar) {
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view' => true,
                        'comment' => false,
                    ]);
                },
                ['view', 'comment'],
                true,
                false,
            ],
            'user has all rights, requireAll is false' => [
                function ($user, $grammar) {
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view' => true,
                        'comment' => true,
                    ]);
                },
                ['view', 'comment'],
                false,
                true,
            ],
            'user has all rights, requireAll is true' => [
                function ($user, $grammar) {
                    factory(Right::class)->create([
                        'user_id' => $user->id,
                        'grammar_id' => $grammar->id,
                        'view' => true,
                        'comment' => true,
                    ]);
                },
                ['view', 'comment'],
                true,
                true,
            ],
        ];
    }

    public function testGrammarsRelationship()
    {
        $user = factory(User::class)->create();
        factory(Grammar::class, 5)->create(['owner' => $user->id]);
        factory(Grammar::class, 10)->create();

        $this->assertEquals(5, $user->grammars->count());
    }

    public function testCommentsRelationship()
    {
        $user = factory(User::class)->create();
        factory(Comment::class, 5)->create(['user_id' => $user->id]);
        factory(Comment::class, 10)->create();

        $this->assertEquals(5, $user->comments->count());
    }

    public function testRightsRelationship()
    {
        $user = factory(User::class)->create();
        factory(Right::class, 5)->create(['user_id' => $user->id]);
        factory(Right::class, 10)->create();

        $this->assertEquals(5, $user->rights->count());
    }

    /**
     * @dataProvider availableGrammarsProvider
     */
    public function testAvailableGrammars($cb, $amount)
    {
        $user = factory(User::class)->create();
        $cb($user);

        $this->assertEquals($amount, $user->availableGrammars()->count());
    }

    public function availableGrammarsProvider()
    {
        return [
            'user is admin' => [function ($user) {
                $user->update(['is_admin' => true]);
                factory(Grammar::class, 10)->create();
            }, 10],
            'user is owner' => [function ($user) {
                factory(Grammar::class, 5)->create(['owner' => $user->id]);
                factory(Grammar::class, 10)->create(['public_view' => false]);
            }, 5],
            'grammars are public' => [function ($user) {
                factory(Grammar::class, 5)->create(['public_view' => false]);
                factory(Grammar::class, 10)->create(['public_view' => true]);
            }, 10],
            'user has rights to view or comment grammars' => [function ($user) {
                $grammars = factory(Grammar::class, 5)->create([
                    'public_view' => false,
                ]);

                $ids = $grammars->pluck('id')->toArray();
                foreach ($ids as $id) {
                    factory(Right::class)->create([
                        'grammar_id' => $id,
                        'user_id' => $user->id,
                        'view' => true,
                        'comment' => true,
                    ]);
                }

                factory(Grammar::class, 10)->create([
                    'public_view' => false,
                ]);
            }, 5],
            'compound example' => [function ($user) {
                factory(Grammar::class, 3)->create([
                    'public_view' => true,
                ]);
                $grammars = factory(Grammar::class, 5)->create([
                    'public_view' => false,
                ]);

                $ids = $grammars->pluck('id')->toArray();
                foreach ($ids as $id) {
                    factory(Right::class)->create([
                        'grammar_id' => $id,
                        'user_id' => $user->id,
                        'view' => true,
                        'comment' => true,
                    ]);
                }

                factory(Grammar::class, 7)->create([
                    'owner' => $user->id,
                    'public_view' => false,
                ]);

                factory(Grammar::class, 10)->create([
                    'public_view' => false,
                ]);
            }, 15],
        ];
    }
}
