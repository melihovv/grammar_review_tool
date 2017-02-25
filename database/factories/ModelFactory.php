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
        'name' => $faker->unique()->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'is_admin' => false,
        'remember_token' => str_random(10),
        'api_token' => str_random(60),
        'confirmed' => true,
        'email_token' => null,
    ];
});

$factory->defineAs(
    User::class,
    'unconfirmed',
    function (Generator $faker) use ($factory) {
        $user = $factory->raw(User::class);

        return array_merge($user, [
            'confirmed' => false,
            'email_token' => str_random(10),
        ]);
    }
);

$factory->defineAs(
    User::class,
    'admin',
    function (Generator $faker) use ($factory) {
        $user = $factory->raw(User::class);

        return array_merge($user, ['is_admin' => true]);
    }
);

$factory->define(Grammar::class, function (Generator $faker) {
    return [
        'user_id' => function () {
            return factory(User::class)->create()->id;
        },
        'name' => $faker->sentence(),
        'content' => <<<'HERE'
%name block_formal_langs_parser_cpp_language
%declare_class {class block_formal_langs_parser_cpp_language}

/* COMMENTS */

comment_list(R) ::= comment_list(A) COMMENT(B) .  {
    A->add_child(B);
    R = A;
}

comment_list(R) ::= COMMENT(A) . {
     R = $this->create_node('comment_list', array( A ));
}
HERE
        ,
        'public_view' => $faker->boolean(),
        'allow_to_comment' => $faker->boolean(),
        'parent_id' => null,
        'lft' => null,
        'rgt' => null,
        'depth' => null,
        'updater_id' => $faker->boolean() ? function () {
            return factory(User::class)->create()->id;
        }
    : null,
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
        'edit' => $faker->boolean(),
        'admin' => $faker->boolean(),
    ];
});
