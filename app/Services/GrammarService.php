<?php

namespace App\Services;

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Http\Requests\Request;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use PDOException;

class GrammarService
{
    /**
     * Rows to delete while comments update.
     */
    protected $deletedRows = [];

    /**
     * Rows which was added in updated grammar.
     */
    protected $addedRows = [];

    /**
     * @param Grammar $grammar
     * @param Request $request
     */
    public function update(Grammar $grammar, Request $request)
    {
        try {
            DB::beginTransaction();

            $this->updateComments($grammar, $request);
            $grammar->update($request->all());

            DB::commit();
        } catch (PDOException $e) {
            DB::rollback();
        }
    }

    /**
     * @param Grammar $grammar
     * @param Request $request
     */
    protected function updateComments(Grammar $grammar, Request $request)
    {
        $linesA = explode("\n", $grammar->content);
        $linesB = explode("\n", $request->get('content'));

        $this->backtrack(
            lcs($linesA, $linesB),
            $linesA,
            $linesB,
            count($linesA) - 1,
            count($linesB) - 1
        );

        $this->deletedRows = array_values(array_unique($this->deletedRows));
        sort($this->deletedRows);
        $this->addedRows = array_values(array_unique($this->addedRows));
        sort($this->addedRows);

        if (count($this->deletedRows) > 0) {
            Comment::where('grammar_id', $grammar->id)
                ->whereIn('row', $this->deletedRows)
                ->delete();
        }

        $comments = $this->computeNewRows($grammar);
        Comment::replace($comments->toArray());
    }

    /**
     * Compute new comment rows.
     *
     * @param Grammar $grammar
     *
     * @return Collection
     */
    protected function computeNewRows(Grammar $grammar)
    {
        $comments = Comment::where('grammar_id', $grammar->id)
            ->get();

        $deletedRows = $this->deletedRows;
        $addedRows = $this->addedRows;
        $comments = $comments->map(
            function ($comment) use ($deletedRows, $addedRows) {
                foreach ($deletedRows as $row) {
                    if ($comment->row >= $row) {
                        --$comment->row;
                    }
                }

                foreach ($addedRows as $row) {
                    if ($comment->row >= $row) {
                        ++$comment->row;
                    }
                }

                return $comment;
            }
        );

        return $comments;
    }

    /**
     * Backtrack through lcs matrix to determine which lines were deleted or
     * added.
     *
     * @param array $lcs
     * @param array $linesA
     * @param array $linesB
     * @param int $i
     * @param int $j
     */
    protected function backtrack($lcs, $linesA, $linesB, $i, $j)
    {
        if ($i >= 0 && $j >= 0 && $linesA[$i] === $linesB[$j]) {
            $this->backtrack($lcs, $linesA, $linesB, $i - 1, $j - 1);
        } elseif ($j >= 0 && ($i === -1 || $lcs[$i][$j - 1] >= $lcs[$i - 1][$j])) {
            // Line was added.
            $this->addedRows[] = $j + 1;
            $this->backtrack($lcs, $linesA, $linesB, $i, $j - 1);
        } elseif ($i >= 0 && ($j === -1 || $lcs[$i][$j - 1] < $lcs[$i - 1][$j])) {
            // Line was removed.
            $this->deletedRows[] = $i + 1;
            $this->backtrack($lcs, $linesA, $linesB, $i - 1, $j);
        }
    }
}
