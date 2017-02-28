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
            $table->boolean('public_view')->index();
            $table->boolean('allow_to_comment')->default(true);

            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')
                ->onUpdate('cascade')->onDelete('cascade');
        });

        Schema::create('versions', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('grammar_id');
            $table->unsignedInteger('updater_id')->nullable();
            $table->mediumText('content');

            $table->integer('parent_id')->nullable()->index();
            $table->integer('lft')->nullable()->index();
            $table->integer('rgt')->nullable()->index();
            $table->integer('depth')->nullable();

            $table->timestamps();

            $table->foreign('grammar_id')->references('id')->on('grammars')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('updater_id')->references('id')->on('users')
                ->onUpdate('cascade')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('grammars');
        Schema::dropIfExists('versions');
    }
}
