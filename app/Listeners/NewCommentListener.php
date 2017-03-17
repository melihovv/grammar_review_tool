<?php

namespace App\Listeners;

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Events\NewComment;
use App\Mail\NewComment as NewCommentMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class NewCommentListener implements ShouldQueue
{
    public function handle(NewComment $event)
    {
        $email = new NewCommentMail(
            $event->user,
            $event->comment,
            $event->grammar,
            $event->version
        );

        Mail::to(config('mail.noreply'))
            ->bcc($this->getEmails($event->comment, $event->grammar))
            ->queue($email);
    }

    /**
     * @param Comment $comment
     * @param Grammar $grammar
     *
     * @return array
     */
    protected function getEmails(Comment $comment, Grammar $grammar)
    {
        if ($grammar->public_view) {
            $query = $grammar->usersWithAtLeastOneComment([$grammar->user_id]);
        } else {
            $query = $grammar->usersWithRights([$grammar->user_id]);
        }

        $emails = $query
            ->where('id', '!=', $comment->user_id)
            ->pluck('email')
            ->toArray();

        return $emails;
    }
}
