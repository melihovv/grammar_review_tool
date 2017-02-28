<?php

namespace App\Policies;

use App\Entities\Grammar;
use App\Entities\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class GrammarPolicy
{
    use HandlesAuthorization;

    public function before(User $user, $ability)
    {
        if ($user->is_admin && !in_array($ability, [
                'manageRights',
                'update',
                'delete',
            ], true)
        ) {
            return true;
        }
    }

    public function delete(User $user, Grammar $grammar)
    {
        return $user->is_admin
            || $user->isGrammarOwner($grammar)
            || $user->hasRight('admin', $grammar);
    }

    public function view(User $user, Grammar $grammar)
    {
        return $grammar->public_view
            || $user->isGrammarOwner($grammar)
            || $user->hasRight(['view', 'comment', 'edit', 'admin'], $grammar);
    }

    public function comment(User $user, Grammar $grammar)
    {
        return $user->isGrammarOwner($grammar)
            || ($grammar->allow_to_comment
                && $user->hasRight(['comment', 'edit', 'admin'], $grammar));
    }

    public function manageRights(User $user, Grammar $grammar)
    {
        return $user->is_admin
            || $user->isGrammarOwner($grammar)
            || $user->hasRight('admin', $grammar);
    }

    public function update(User $user, Grammar $grammar)
    {
        return $user->is_admin
            || $user->isGrammarOwner($grammar)
            || $user->hasRight(['edit', 'admin'], $grammar);
    }
}
