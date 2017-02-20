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
        return redirect()->route('grammars.index');
    });

    Route::get('grammars/{grammar}/history', 'GrammarsController@history')
        ->name('grammars.history');
    Route::resource('grammars', 'GrammarsController');
});
