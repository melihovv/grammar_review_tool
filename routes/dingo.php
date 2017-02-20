<?php

use Dingo\Api\Routing\Router;

$api = app(Router::class);

$api->version('v1', [
    'middleware' => ['auth:api', 'api', 'email.confirm'],
    'namespace' => 'App\Http\Controllers\Api',
], function (Router $api) {
    $api->group(['middleware' => ['api.auth']], function (Router $api) {
        $api->get('/users/{grammar}/find', 'UsersController@find')
            ->name('users.find');

        $api->resource('users', 'UsersController', [
            'only' => ['index', 'show'],
        ]);

        $api->get(
            '/grammars/{grammar}/diff',
            'GrammarsController@diff'
        )->name('grammars.diff');

        $api->get(
            '/grammars/{grammar}/all-versions',
            'GrammarsController@allVersions'
        )->name('grammars.all-versions');

        $api->resource('grammars', 'GrammarsController', [
            'except' => ['create', 'edit', 'update'],
        ]);

        $api->resource('grammars.comments', 'CommentsController', [
            'only' => ['store', 'update', 'destroy'],
        ]);

        $api->resource('grammars.rights', 'RightsController', [
            'only' => ['index', 'store', 'update', 'destroy'],
        ]);
    });
});
