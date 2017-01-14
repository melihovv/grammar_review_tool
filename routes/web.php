<?php

Auth::routes();

Route::group(['middleware' => ['auth']], function () {
    Route::get('/', function () {
        return redirect()->route('home.index');
    });

    Route::get('/home', [
        'uses' => 'HomeController@index',
        'as' => 'home.index',
    ]);
});
