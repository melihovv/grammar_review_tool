<?php

namespace App\Services;

use App\Entities\Grammar;
use App\Entities\User;
use App\Entities\Version;
use Illuminate\Support\Facades\DB;

class GrammarService
{
    /**
     * Diff between two grammars.
     *
     * @var array
     */
    protected $diff = [];

    /**
     * @var CommentService
     */
    protected $commentService;

    /**
     * @param CommentService $commentService
     */
    public function __construct(CommentService $commentService)
    {
        $this->commentService = $commentService;
    }

    /**
     * @param array $data
     * @return array
     */
    public function create(array $data)
    {
        $grammar = null;
        $version = null;

        DB::transaction(function () use (&$grammar, &$version, $data) {
            $grammar = Grammar::create($data);
            $version = Version::create([
                'grammar_id' => $grammar->id,
                'content' => $data['content'],
                'updater_id' => $data['user_id'],
            ]);
        });

        return [$grammar, $version];
    }

    /**
     * @param Grammar $grammar
     * @param User $updater
     * @param array $data
     *
     * @return Version
     */
    public function update(Grammar $grammar, User $updater, array $data)
    {
        $newVersion = null;

        DB::transaction(
            function () use ($grammar, $data, &$newVersion, $updater) {
                $grammar->update($data);
                $prevVersion = $grammar->getLatestVersion();
                $newVersion = Version::create([
                    'grammar_id' => $grammar->id,
                    'updater_id' => $updater->id,
                    'content' => $data['content'],
                ]);
                $newVersion->makeChildOf($prevVersion);

                $this->commentService
                    ->updateComments($prevVersion, $newVersion);
            }
        );

        return $newVersion;
    }

    /**
     * @param Grammar $grammar
     * @return bool|null
     */
    public function delete(Grammar $grammar)
    {
        return $grammar->delete();
    }

    /**
     * @param Grammar $grammar
     *
     * @return array
     */
    public function diff(Grammar $grammar, $version = null)
    {
        if ($version === null) {
            $currentVersion = $grammar->getLatestVersion();
        } else {
            $currentVersion = $grammar->getVersion($version);
        }

        $prevVersion = $currentVersion->parent()->first();
        $prevContent = $prevVersion !== null
            ? $prevVersion->content
            : $currentVersion->content;

        $linesA = explode("\n", $prevContent);
        $linesB = explode("\n", $currentVersion->content);

        $this->diff = [];
        $this->backtrackDiff(
            lcs($linesA, $linesB),
            $linesA,
            $linesB,
            count($linesA) - 1,
            count($linesB) - 1
        );

        return $this->diff;
    }

    /**
     * Backtrack through lcs matrix to produce diff.
     *
     * @param array $lcs
     * @param array $linesA
     * @param array $linesB
     * @param int $i
     * @param int $j
     *
     * @return array
     *
     * @SuppressWarnings(PHPMD.CyclomaticComplexity)
     */
    protected function backtrackDiff($lcs, $linesA, $linesB, $i, $j)
    {
        $lineWasAdded = false;
        if (isset($lcs[$i][$j - 1], $lcs[$i - 1][$j])) {
            $lineWasAdded = $lcs[$i][$j - 1] >= $lcs[$i - 1][$j];
        }

        if ($i >= 0 && $j >= 0 && $linesA[$i] === $linesB[$j]) {
            $this->backtrackDiff($lcs, $linesA, $linesB, $i - 1, $j - 1);
            $this->diff[] = ['line' => $linesA[$i], 'type' => 'unmodified'];
        } elseif ($j >= 0 && ($i === -1 || $lineWasAdded)) {
            $this->backtrackDiff($lcs, $linesA, $linesB, $i, $j - 1);
            $this->diff[] = ['line' => $linesB[$j], 'type' => 'added'];
        } elseif ($i >= 0 && ($j === -1 || !$lineWasAdded)) {
            $this->backtrackDiff($lcs, $linesA, $linesB, $i - 1, $j);
            $this->diff[] = ['line' => $linesA[$i], 'type' => 'removed'];
        }
    }
}
