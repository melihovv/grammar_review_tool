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
            '/grammars/{grammar}/versions',
            'GrammarsController@versions'
        )->name('grammars.versions');

        $api->resource('grammars', 'GrammarsController', [
            'only' => ['store', 'show', 'destroy'],
        ]);

        $api->resource('grammars.comments', 'CommentsController', [
            'only' => ['store', 'update', 'destroy'],
        ]);

        $api->resource('grammars.rights', 'RightsController', [
            'only' => ['index', 'store', 'update', 'destroy'],
        ]);
    });
});
