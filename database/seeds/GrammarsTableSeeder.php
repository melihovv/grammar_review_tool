<?php

use App\Entities\Grammar;
use Illuminate\Database\Seeder;

class GrammarsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Grammar::class, 20)->create();
    }
}
