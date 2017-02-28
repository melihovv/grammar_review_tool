<?php

namespace Tests\Unit\Entities;

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Entities\Right;
use App\Entities\Version;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\DatabaseTestCase;

class VersionTest extends DatabaseTestCase
{
    use DatabaseMigrations;

    public function testGrammarRelationship()
    {
        $grammar = factory(Grammar::class)->create();
        $version = factory(Version::class)->create([
            'grammar_id' => $grammar->id,
        ]);

        $this->assertEquals($grammar->toArray(), $version->grammar->toArray());
    }

    public function testCommentsRelationship()
    {
        $version = factory(Version::class)->create();
        factory(Comment::class, 5)->create(['version_id' => $version->id]);
        factory(Comment::class, 10)->create();

        $this->assertEquals(5, $version->comments->count());
    }

    public function testRightsRelationship()
    {
        $grammar = factory(Grammar::class)->create();
        factory(Right::class, 5)->create(['grammar_id' => $grammar->id]);
        factory(Right::class, 10)->create();

        $this->assertEquals(5, $grammar->rights->count());
    }
}
