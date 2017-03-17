<?php

namespace App\Events;

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Entities\User;
use App\Entities\Version;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;

class NewComment
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * @var User
     */
    public $user;

    /**
     * @var Comment
     */
    public $comment;

    /**
     * @var Grammar
     */
    public $grammar;

    /**
     * @var Version
     */
    public $version;

    public function __construct(
        User $user,
        Comment $comment,
        Grammar $grammar,
        Version $version
    ) {
        $this->user = $user;
        $this->comment = $comment;
        $this->grammar = $grammar;
        $this->version = $version;
    }
}
