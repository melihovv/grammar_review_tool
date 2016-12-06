<?php

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Entities\User;
use App\Http\Transformers\CommentTransformer;
use Dingo\Api\Routing\UrlGenerator;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class CommentsControllerTest extends TestCase
{
    use DatabaseMigrations;
    use ApiHelpers;

    public function testStore()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.comments.store', [$grammar->id]);

        $this->post($route, [
            'content' => 'content1',
            'row' => 1,
            'column' => 0,
        ], $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => CommentTransformer::attrs(),
        ]);
        $this->seeInDatabase('comments', [
            'user_id' => $user->id,
            'grammar_id' => $grammar->id,
            'content' => 'content1',
            'row' => 1,
            'column' => 0,
        ]);
    }

    public function testUpdate()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();
        $comment = factory(Comment::class)->create([
            'user_id' => $user->id,
            'grammar_id' => $grammar->id,
            'content' => 'content1',
            'row' => 1,
            'column' => 0,
        ]);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.comments.update', [$grammar->id, $comment->id]);

        $this->put($route, [
            'content' => 'content2',
            'row' => 1,
            'column' => 0,
        ], $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => CommentTransformer::attrs(),
        ]);
        $this->seeInDatabase('comments', [
            'user_id' => $user->id,
            'grammar_id' => $grammar->id,
            'content' => 'content2',
            'row' => 1,
            'column' => 0,
        ]);
    }

    public function testUpdateByAdmin()
    {
        $user = factory(User::class)->create(['is_admin' => true]);
        $grammar = factory(Grammar::class)->create();
        $comment = factory(Comment::class)->create([
            'user_id' => $user->id,
            'grammar_id' => $grammar->id,
            'content' => 'content1',
            'row' => 1,
            'column' => 0,
        ]);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.comments.update', [$grammar->id, $comment->id]);

        $this->put($route, [
            'content' => 'content2',
            'row' => 1,
            'column' => 0,
            'grammar_id' => 10,
            'user_id' => 20,
        ], $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => CommentTransformer::attrs(),
        ]);
        $this->seeInDatabase('comments', [
            'user_id' => $grammar->user->id,
            'grammar_id' => $grammar->id,
            'content' => 'content2',
            'row' => 1,
            'column' => 0,
        ]);
    }

    public function testDestroy()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();
        $comment = factory(Comment::class)->create();

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.comments.destroy', [$grammar->id, $comment->id]);

        $this->delete($route, [], $this->headers('v1', $user));

        $this->assertResponseStatus(204);
        $this->notSeeInDatabase('comments', [
            'id' => $comment->id,
        ]);
    }
}
