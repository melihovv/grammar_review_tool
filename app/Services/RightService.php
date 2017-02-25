<?php

namespace App\Services;

use App\Entities\Grammar;
use Illuminate\Database\Eloquent\Collection;

class RightService
{
    /**
     * @param Grammar $grammar
     * @param array   $usersIds
     * @param array   $rights
     *
     * @return Collection
     */
    public function create(Grammar $grammar, array $usersIds, array $rights)
    {
        $now = date('Y-m-d I:h:s');
        $rightsToCreate = [];

        foreach ($usersIds as $usersId) {
            $rightsToCreate[] = [
                'user_id' => $usersId,
                'grammar_id' => $grammar->id,
                'view' => $rights['view'],
                'comment' => $rights['comment'],
                'edit' => $rights['edit'],
                'admin' => $rights['admin'],
                'created_at' => $now,
                'updated_at' => $now,
            ];
        }

        return $grammar->rights()->createMany($rightsToCreate);
    }
}
