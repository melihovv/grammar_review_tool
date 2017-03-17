<?php

namespace App\Mail;

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Entities\User;
use App\Entities\Version;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewComment extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @var User
     */
    protected $user;

    /**
     * @var Comment
     */
    protected $comment;

    /**
     * @var Grammar
     */
    protected $grammar;

    /**
     * @var Version
     */
    protected $version;

    public function __construct(
        User $user,
        Comment $comment,
        Grammar $grammar,
        Version $version
    ) {
        $this->comment = $comment;
        $this->grammar = $grammar;
        $this->version = $version;
        $this->user = $user;
    }

    public function build()
    {
        return $this
            ->markdown('emails.new-comment')
            ->from(config('mail.noreply'), $this->user->name)
            ->subject('New comment in ' . $this->grammar->name)
            ->withUser($this->user)
            ->withComment($this->comment)
            ->withGrammar($this->grammar)
            ->withVersion($this->version);
    }
}
