<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Entities\Grammar;

/**
 * Class GrammarTransformer
 */
class GrammarTransformer extends TransformerAbstract
{
    /**
     * Transform the Grammar entity
     *
     * @param Grammar $model
     *
     * @return array
     */
    public function transform(Grammar $model)
    {
        return [
            'id' => $model->id,
            'owner' => $model->owner,
            'name' => $model->name,
            'content' => $model->content,
            'public_view' => $model->public_view,
        ];
    }
}
