<?php

use Dingo\Api\Routing\Router;

$api = app(Router::class);

$api->version('v1', [
    'middleware' => ['api'],
    'namespace' => 'App\Http\Controllers\Api',
], function (Router $api) {
    $api->post('login', [
        'uses' => 'Auth\AuthController@login',
        'as' => 'login',
    ]);
    $api->post('register', [
        'uses' => 'Auth\AuthController@register',
        'as' => 'register',
    ]);

    $api->group(['middleware' => ['api.auth']], function (Router $api) {
        $api->get('user', [
            'uses' => 'Auth\AuthController@user',
            'as' => 'user',
        ]);

        $api->resource('users', 'UsersController', [
            'only' => ['index', 'show'],
        ]);

        $api->resource('grammars', 'GrammarsController', [
            'except' => ['create', 'edit', 'update'],
        ]);

        $api->resource('grammars.comments', 'CommentsController', [
            'only' => ['store', 'update', 'destroy'],
        ]);

        $api->resource('grammars.rights', 'RightsController', [
            'only' => ['store', 'update', 'destroy'],
        ]);
    });
});
