<?php

namespace Tests\Traits;

use Illuminate\Support\Facades\DB;

trait SudoDatabaseTransactions
{
    /**
     * Tables to exclude from truncation.
     *
     * @var array
     */
    protected $excludeableTables = [
        'migrations',
    ];

    /**
     * @before
     */
    public function sudoDatabaseTransaction()
    {
        static $tables = [];

        if (empty($tables)) {
            $tables = $this->getTables();
        }

        $this->beforeApplicationDestroyed(function () use ($tables) {
            DB::statement('SET FOREIGN_KEY_CHECKS=0');

            foreach ($tables as $table) {
                DB::table($table)->truncate();
            }

            DB::statement('SET FOREIGN_KEY_CHECKS=1');
        });
    }

    /**
     * Get the databases tables excluding the excludeableTables.
     *
     * @return \Illuminate\Support\Collection
     */
    private function getTables()
    {
        return DB::table('information_schema.tables')
            ->where('table_schema', app('db')->getDatabaseName())
            ->whereNotIn('table_name', $this->excludeableTables)
            ->pluck('table_name');
    }
}
