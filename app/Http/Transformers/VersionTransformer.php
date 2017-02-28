<?php

namespace App\Http\Transformers;

use App\Entities\Version;

class VersionTransformer extends Transformer
{
    protected $availableIncludes = [
        'updater',
        'comments',
        'grammar',
    ];

    public function transform(Version $model)
    {
        return array_combine(static::attrs(), [
            $model->id,
            $model->grammar_id,
            $model->updater_id,
            e($model->content),
            $model->depth,
            $model->created_at->format('I:h') . ' '
            . $model->created_at->toFormattedDateString(),
        ]);
    }

    public static function attrs()
    {
        return [
            'id',
            'grammar_id',
            'updater_id',
            'content',
            'version',
            'created_at',
        ];
    }

    public function includeUpdater(Version $model)
    {
        return $this->item($model->updater, new UserTransformer());
    }

    public function includeComments(Version $model)
    {
        return $this->collection($model->comments, new CommentTransformer());
    }

    public function includeGrammar(Version $model)
    {
        return $this->item($model->grammar, new GrammarTransformer());
    }
}
