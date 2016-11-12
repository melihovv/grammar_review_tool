<?php

namespace App\Http\Controllers\Api;

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Http\Requests\CommentRequest;
use App\Http\Transformers\CommentTransformer;
use Dingo\Api\Facade\API;

// TODO write tests for controllers
class CommentsController extends ApiController
{
    public function store(Grammar $grammar, CommentRequest $request)
    {
        $comment = Comment::create(array_merge($request->all(), [
            'user_id' => API::user()->id,
            'grammar_id' => $grammar->id,
        ]));

        return $this->response->item($comment, new CommentTransformer());
    }

    public function update(
        Grammar $grammar,
        Comment $comment,
        CommentRequest $request
    ) {
        $comment->update(array_merge($request->all(), [
            'user_id' => API::user()->id,
            'grammar_id' => $grammar->id,
        ]));

        return $this->response->item($comment, new CommentTransformer());
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function destroy(Grammar $grammar, Comment $comment)
    {
        $comment->delete();

        return $this->response->noContent();
    }
}
