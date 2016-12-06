<?php

namespace App\Policies;

use App\Entities\Comment;
use App\Entities\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CommentPolicy
{
    use HandlesAuthorization;

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function before(User $user, $ability)
    {
        if ($user->is_admin) {
            return true;
        }
    }

    public function update(User $user, Comment $comment)
    {
        return $user->isCommentOwner($comment);
    }

    public function delete(User $user, Comment $comment)
    {
        return $user->isCommentOwner($comment);
    }
}
