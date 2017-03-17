<?php

namespace App\Services;

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Entities\Version;
use App\Events\NewComment;
use Illuminate\Database\Eloquent\Collection;

class CommentService
{
    /**
     * Rows to delete while comments update.
     *
     * @var array
     */
    protected $deletedRows = [];

    /**
     * Rows which was added in updated grammar.
     *
     * @var array
     */
    protected $addedRows = [];

    /**
     * @param array   $data
     * @param Grammar $grammar
     *
     * @return Comment
     */
    public function create(array $data, Grammar $grammar)
    {
        $comment = Comment::create($data);
        $version = Version::exclude(['content'])->find($data['version_id']);

        event(new NewComment(
            auth()->user(),
            $comment,
            $grammar,
            $version
        ));

        return $comment;
    }

    /**
     * @param array $data
     *
     * @return Comment
     */
    public function update(Comment $comment, array $data)
    {
        $comment->update($data);

        return $comment;
    }

    /**
     * @param array $data
     *
     * @return bool
     */
    public function delete(Comment $comment)
    {
        $comment->delete();
    }

    /**
     * @param Version $prevVersion
     * @param Version $newVersion
     */
    public function updateComments($prevVersion, $newVersion)
    {
        $linesA = explode("\n", $prevVersion->content);
        $linesB = explode("\n", $newVersion->content);

        $this->addedRows = [];
        $this->deletedRows = [];

        $this->backtrackComments(
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

        $comments = $this->computeNewRows($prevVersion);
        $comments = $comments->map(function ($comment) use ($newVersion) {
            $comment->version_id = $newVersion->id;
            $comment->id = null;

            return $comment;
        });
        Comment::insert($comments->toArray());
    }

    /**
     * Compute new comment rows.
     *
     * @param Version $version
     *
     * @return Collection
     */
    protected function computeNewRows(Version $version)
    {
        $comments = Comment::where('version_id', $version->id)
            ->whereNotIn('row', $this->deletedRows)
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
     * @param int   $i
     * @param int   $j
     *
     * @SuppressWarnings(PHPMD.CyclomaticComplexity)
     */
    protected function backtrackComments($lcs, $linesA, $linesB, $i, $j)
    {
        $lineWasAdded = false;
        if (isset($lcs[$i][$j - 1], $lcs[$i - 1][$j])) {
            $lineWasAdded = $lcs[$i][$j - 1] >= $lcs[$i - 1][$j];
        }

        if ($i >= 0 && $j >= 0 && $linesA[$i] === $linesB[$j]) {
            $this->backtrackComments($lcs, $linesA, $linesB, $i - 1, $j - 1);
        } elseif ($j >= 0 && ($i === -1 || $lineWasAdded)) {
            // Line was added.
            $this->addedRows[] = $j + 1;
            $this->backtrackComments($lcs, $linesA, $linesB, $i, $j - 1);
        } elseif ($i >= 0 && ($j === -1 || !$lineWasAdded)) {
            // Line was removed.
            $this->deletedRows[] = $i + 1;
            $this->backtrackComments($lcs, $linesA, $linesB, $i - 1, $j);
        }
    }
}
