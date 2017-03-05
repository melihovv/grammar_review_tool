<?php

namespace App\Console\Commands;

class CreateSqliteDb extends Command
{
    protected $signature = 'create:sqlite-db';

    protected $description = 'Create sqlite db file';

    public function handle()
    {
        touch(config('database.connections.sqlite.database'));
    }
}
