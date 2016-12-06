<?php

use App\Entities\Grammar;
use App\Entities\User;
use App\Http\Transformers\GrammarTransformer;
use Dingo\Api\Routing\UrlGenerator;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class GrammarsControllerTest extends DatabaseTestCase
{
    use DatabaseMigrations;
    use ApiHelpers;

    public function testIndex()
    {
        $user = factory(User::class)->create();
        factory(Grammar::class, 10)->create();

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.index');

        $this->get($route, $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => [
                '*' => GrammarTransformer::attrs(),
            ],
            'meta' => [
                'pagination',
            ],
        ]);
    }

    public function testStore()
    {
        $user = factory(User::class)->create();

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.store');

        $this->post($route, [
            'name' => 'grammar1',
            'content' => 'hi',
            'public_view' => false,
        ], $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => GrammarTransformer::attrs(),
        ]);
        $this->seeInDatabase('grammars', [
            'name' => 'grammar1',
            'content' => 'hi',
            'public_view' => false,
        ]);
    }

    public function testShow()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.show', [$grammar->id]);

        $this->get($route, $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => GrammarTransformer::attrs(),
        ]);
    }

    public function testUpdate()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create([
            'name' => 'grammar1',
            'content' => 'hi',
            'public_view' => false,
        ]);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.update', $grammar->id);

        $this->put($route, [
            'name' => 'grammar2',
            'content' => 'hi',
            'public_view' => false,
        ], $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => GrammarTransformer::attrs(),
        ]);
        $this->seeInDatabase('grammars', [
            'name' => 'grammar2',
            'content' => 'hi',
            'public_view' => false,
        ]);
    }

    public function testDestroy()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.destroy', $grammar->id);

        $this->delete($route, [], $this->headers('v1', $user));

        $this->assertResponseStatus(204);
        $this->notSeeInDatabase('grammars', [
            'id' => $grammar->id,
        ]);
    }
}
