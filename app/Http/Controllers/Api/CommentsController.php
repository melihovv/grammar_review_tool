<?php

namespace App\Http\Controllers\Api;

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Http\Requests\Comment\StoreRequest;
use App\Http\Requests\Comment\UpdateRequest;
use App\Http\Transformers\CommentTransformer;
use App\Services\CommentService;

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
    public function store(
        Grammar $grammar,
        StoreRequest $request,
        CommentService $service
    ) {
        $comment = $service->create($request->all(), $grammar);

        return $this->response->item($comment, new CommentTransformer());
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function update(
        Grammar $grammar,
        Comment $comment,
        UpdateRequest $request,
        CommentService $service
    ) {
        $updatedComment = $service->update($comment, $request->all());

        return $this->response->item($updatedComment, new CommentTransformer());
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function destroy(
        Grammar $grammar,
        Comment $comment,
        CommentService $service
    ) {
        $service->delete($comment);

        return $this->response->noContent();
    }
}
