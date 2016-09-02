<?php

use App\Entities\Grammar;
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
