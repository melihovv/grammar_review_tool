<?php

namespace Tests\Unit\Entities;

use App\Entities\Grammar;
use App\Entities\Right;
use App\Entities\User;
use App\Entities\Version;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\DatabaseTestCase;

class GrammarTest extends DatabaseTestCase
{
    use DatabaseMigrations;

    public function testUserRelationship()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create(['user_id' => $user->id]);

        $this->assertEquals($user->toArray(), $grammar->owner->toArray());
    }

    public function testVersionsRelationship()
    {
        $grammar = factory(Grammar::class)->create();
        factory(Version::class, 5)->create(['grammar_id' => $grammar->id]);
        factory(Version::class, 10)->create();

        $this->assertEquals(5, $grammar->versions->count());
    }

    public function testRightsRelationship()
    {
        $grammar = factory(Grammar::class)->create();
        factory(Right::class, 5)->create(['grammar_id' => $grammar->id]);
        factory(Right::class, 10)->create();

        $this->assertEquals(5, $grammar->rights->count());
    }

    public function testGetVersion()
    {
        list($grammar) = $this->createGrammar('content1');
        $child = $this->updateGrammar($grammar, 'content2');

        $this->assertEquals(
            'content1',
            $grammar->getVersion(0)->content
        );
        $this->assertEquals(
            $child->toArray(),
            $grammar->getVersion(1)->toArray()
        );
    }

    public function testGetLatestVersion()
    {
        list($grammar) = $this->createGrammar('content1');
        $child = $this->updateGrammar($grammar, 'content2');

        $this->assertEquals(
            $child->toArray(),
            $grammar->getLatestVersion()->toArray()
        );
    }

    public function testHasVersionWithId()
    {
        list($grammar, $parent) = $this->createGrammar('content1');
        $child = $this->updateGrammar($grammar, 'content2');

        $this->assertTrue($grammar->hasVersionWithId($parent->id));
        $this->assertTrue($grammar->hasVersionWithId($child->id));
        $this->assertFalse($grammar->hasVersionWithId(100500));
    }

    public function testHasVersion()
    {
        list($grammar, $parent) = $this->createGrammar('content1');
        $child = $this->updateGrammar($grammar, 'content2');

        $this->assertTrue($grammar->hasVersion($parent->depth));
        $this->assertTrue($grammar->hasVersion($child->depth));
        $this->assertFalse($grammar->hasVersion(100500));
    }
}
