<?php

Auth::routes();
Route::get('register/confirm/{token}', 'Auth\RegisterController@confirm')
    ->name('register.confirm');

Route::group(['middleware' => ['auth', 'email.confirm']], function () {
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
        'only' => ['index', 'show', 'create', 'store', 'destroy'],
    ]);
});
