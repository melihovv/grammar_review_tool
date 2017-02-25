<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRightsTable extends Migration
{
    public function up()
    {
        Schema::create('rights', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('grammar_id');
            $table->boolean('view');
            $table->boolean('comment');
            $table->boolean('edit');
            $table->boolean('admin');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')
                ->onUpdate('cascade')->onDelete('cascade');

            $table->foreign('grammar_id')->references('id')->on('grammars')
                ->onUpdate('cascade')->onDelete('cascade');

            $table->unique(['user_id', 'grammar_id']);

            $table->index('view');
            $table->index('comment');
            $table->index('edit');
            $table->index('admin');
        });
    }

    public function down()
    {
        Schema::drop('rights');
    }
}
