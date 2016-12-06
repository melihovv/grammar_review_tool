<?php

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Entities\Right;
use App\Entities\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class CommentTest extends DatabaseTestCase
{
    use DatabaseMigrations;

    public function testUserRelationship()
    {
        $user = factory(User::class)->create();
        $comment = factory(Comment::class)->create(['user_id' => $user->id]);

        $this->assertEquals($user->toArray(), $comment->user->toArray());
    }

    public function testGrammarRelationship()
    {
        $grammar = factory(Grammar::class)->create();
        $comment = factory(Comment::class)->create([
            'grammar_id' => $grammar->id,
        ]);

        $this->assertEquals($grammar->toArray(), $comment->grammar->toArray());
    }
}
