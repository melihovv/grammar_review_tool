<?php

namespace App\Policies;

use App\Entities\Grammar;
use App\Entities\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class GrammarPolicy
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

    public function delete(User $user, Grammar $grammar)
    {
        return $user->isGrammarOwner($grammar);
    }

    public function view(User $user, Grammar $grammar)
    {
        return $grammar->public_view
            || $user->isGrammarOwner($grammar)
            || $user->hasRight(['view', 'comment'], $grammar);
    }

    public function comment(User $user, Grammar $grammar)
    {
        return $user->isGrammarOwner($grammar)
            || ($grammar->allow_to_comment
                && $user->hasRight('comment', $grammar));
    }
}
