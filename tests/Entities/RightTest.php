<?php

namespace Tests\Entities;

use App\Entities\Grammar;
use App\Entities\Right;
use App\Entities\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\DatabaseTestCase;

class RightTest extends DatabaseTestCase
{
    use DatabaseMigrations;

    public function testGrammarRelationship()
    {
        $grammar = factory(Grammar::class)->create();
        $right = factory(Right::class)->create(['grammar_id' => $grammar->id]);

        $this->assertEquals($grammar->toArray(), $right->grammar->toArray());
    }

    public function testUserRelationship()
    {
        $user = factory(User::class)->create();
        $right = factory(Right::class)->create(['user_id' => $user->id]);

        $this->assertEquals($user->toArray(), $right->user->toArray());
    }
}
