<?php

Auth::routes();
Route::get('auth/confirm/{token}', 'Auth\ConfirmController@confirm')
    ->name('auth.confirm');

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
