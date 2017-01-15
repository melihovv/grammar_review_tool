<?php

namespace Tests\Entities;

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Entities\Right;
use App\Entities\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\DatabaseTestCase;

class GrammarTest extends DatabaseTestCase
{
    use DatabaseMigrations;

    public function testUserRelationship()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create(['owner' => $user->id]);

        $this->assertEquals($user->toArray(), $grammar->user->toArray());
    }

    public function testCommentsRelationship()
    {
        $grammar = factory(Grammar::class)->create();
        factory(Comment::class, 5)->create(['grammar_id' => $grammar->id]);
        factory(Comment::class, 10)->create();

        $this->assertEquals(5, $grammar->comments->count());
    }

    public function testRightsRelationship()
    {
        $grammar = factory(Grammar::class)->create();
        factory(Right::class, 5)->create(['grammar_id' => $grammar->id]);
        factory(Right::class, 10)->create();

        $this->assertEquals(5, $grammar->rights->count());
    }
}
