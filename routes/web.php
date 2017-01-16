<?php

Auth::routes();

Route::group(['middleware' => ['auth']], function () {
    if (App::environment('local')) {
        Route::get(
            'logs',
            '\Melihovv\LaravelLogViewer\LaravelLogViewerController@index'
        );
    }

    Route::get('/', function () {
        return redirect()->route('home.index');
    });

    Route::get('/home', [
        'uses' => 'HomeController@index',
        'as' => 'home.index',
    ]);

    Route::resource('grammars', 'GrammarsController', [
        'only' => ['index', 'show'],
    ]);
});
