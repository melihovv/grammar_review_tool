<?php

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Entities\Right;
use App\Entities\User;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'is_admin' => false,
        'remember_token' => str_random(10),
    ];
});

$factory->define(Grammar::class, function (Faker\Generator $faker) {
    return [
        'owner' => rand(1, 10),
        'name' => $faker->sentence(),
        'content' => <<<'HERE'
%name some_grammar
rule1 ::= A B C.
rule2 ::= rule1 D. {/* some action */
HERE
        ,
        'public_view' => $faker->boolean(),
    ];
});

$factory->define(Comment::class, function (Faker\Generator $faker) {
    return [
        'user_id' => rand(1, 10),
        'grammar_id' => rand(1, 20),
        'content' => $faker->paragraph(),
        'row' => rand(1, 3),
        'column' => rand(0, 10),
    ];
});

$factory->define(Right::class, function (Faker\Generator $faker) {
    return [
        'user_id' => rand(1, 10),
        'grammar_id' => rand(1, 20),
        'view' => $faker->boolean(),
        'comment' => $faker->boolean(),
        'edit' => $faker->boolean(),
    ];
});
