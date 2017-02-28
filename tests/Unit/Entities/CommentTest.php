<?php

namespace Tests\Unit\Entities;

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Entities\User;
use App\Entities\Version;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\DatabaseTestCase;

class CommentTest extends DatabaseTestCase
{
    use DatabaseMigrations;

    public function testUserRelationship()
    {
        $user = factory(User::class)->create();
        $comment = factory(Comment::class)->create(['user_id' => $user->id]);

        $this->assertEquals($user->toArray(), $comment->user->toArray());
    }

    public function testVersionRelationship()
    {
        $version = factory(Version::class)->create();
        $comment = factory(Comment::class)->create([
            'version_id' => $version->id,
        ]);

        $this->assertEquals($version->toArray(), $comment->version->toArray());
    }
}
