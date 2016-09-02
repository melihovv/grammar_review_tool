<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateGrammarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grammars', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('owner');
            $table->string('name');
            $table->text('content');
            $table->boolean('public_view');
            $table->timestamps();

            $table->foreign('owner')->references('id')->on('users')
                ->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('grammars');
    }
}
