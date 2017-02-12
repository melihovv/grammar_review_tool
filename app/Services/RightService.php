<?php

namespace App\Services;

use App\Entities\Grammar;

class RightService
{
    /**
     * @param Grammar $grammar
     * @param array   $usersIds
     * @param $view
     * @param $comment
     *
     * @return array
     */
    public function create(Grammar $grammar, array $usersIds, $view, $comment)
    {
        $now = date('Y-m-d I:h:s');
        $rights = [];

        foreach ($usersIds as $usersId) {
            $rights[] = [
                'user_id' => $usersId,
                'grammar_id' => $grammar->id,
                'view' => $view,
                'comment' => $comment,
                'created_at' => $now,
                'updated_at' => $now,
            ];
        }

        return $grammar->rights()->createMany($rights);
    }
}
