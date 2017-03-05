<?php

namespace Tests\Traits;

use App\Entities\Grammar;
use App\Entities\User;
use App\Entities\Version;
use Facades\App\Services\GrammarService;

trait DbHelpers
{
    protected function createGrammar($content = 'content', $grammarAttrs = [])
    {
        $grammarAttrs = factory(Grammar::class)->raw($grammarAttrs);

        return GrammarService::create($grammarAttrs + ['content' => $content]);
    }

    protected function updateGrammar(
        Grammar $grammar,
        $content = 'new content',
        $updater = null
    ) {
        if ($updater === null) {
            $updater = factory(User::class)->create();
        }

        return GrammarService::update(
            $grammar,
            $updater,
            array_merge($grammar->toArray(), ['content' => $content])
        );
    }

    protected function getGrammarContent()
    {
        $version = factory(Version::class)->raw([
            'grammar_id' => 1,
        ]);

        return $version['content'];
    }
}
