<?php

namespace App\Http\Controllers\Api;

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Http\Requests\Comment\CommentStoreRequest;
use App\Http\Requests\Comment\CommentUpdateRequest;
use App\Http\Transformers\CommentTransformer;

class CommentsController extends ApiController
{
    public function __construct()
    {
        $this->middleware('can:comment,grammar');
        $this->middleware('can:update,comment', ['only' => ['update']]);
        $this->middleware('can:delete,comment', ['only' => ['destroy']]);
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function store(Grammar $grammar, CommentStoreRequest $request)
    {
        $comment = Comment::create($request->all());

        return $this->response->item($comment, new CommentTransformer());
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function update(
        Grammar $grammar,
        Comment $comment,
        CommentUpdateRequest $request
    ) {
        $comment->update($request->all());

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
