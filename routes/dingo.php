<?php

use Dingo\Api\Routing\Router;

$api = app(Router::class);

$api->version('v1', [
    'middleware' => ['auth:api', 'api', 'email.confirm'],
    'namespace' => 'App\Http\Controllers\Api',
], function (Router $api) {
    $api->group(['middleware' => ['api.auth']], function (Router $api) {
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
