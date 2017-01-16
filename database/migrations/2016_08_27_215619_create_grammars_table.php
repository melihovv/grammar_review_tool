<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateGrammarsTable extends Migration
{
    public function up()
    {
        Schema::create('grammars', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->string('name');
            $table->text('content');
            $table->boolean('public_view');
            $table->boolean('allow_to_comment')->default(true);
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')
                ->onUpdate('cascade')->onDelete('cascade');

            $table->index('public_view');
        });
    }

    public function down()
    {
        Schema::drop('grammars');
    }
}
