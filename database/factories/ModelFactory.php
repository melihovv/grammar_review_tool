<?php

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Entities\Right;
use App\Entities\User;
use Faker\Generator;
use Illuminate\Database\Eloquent\Factory;

/**
 * @var Factory $factory
 */
$factory->define(User::class, function (Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'is_admin' => false,
        'remember_token' => str_random(10),
    ];
});

$factory->define(Grammar::class, function (Generator $faker) {
    return [
        'owner' => function () {
            return factory(User::class)->create()->id;
        },
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

$factory->define(Comment::class, function (Generator $faker) {
    return [
        'user_id' => function () {
            return factory(User::class)->create()->id;
        },
        'grammar_id' => function () {
            return factory(Grammar::class)->create()->id;
        },
        'content' => $faker->paragraph(),
        'row' => random_int(1, 3),
        'column' => random_int(0, 10),
    ];
});

$factory->define(Right::class, function (Generator $faker) {
    return [
        'user_id' => function () {
            return factory(User::class)->create()->id;
        },
        'grammar_id' => function () {
            return factory(Grammar::class)->create()->id;
        },
        'view' => $faker->boolean(),
        'comment' => $faker->boolean(),
    ];
});
