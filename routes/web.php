<?php

Auth::routes();

Route::group(['middleware' => ['auth']], function () {
    Route::get('/', [
        'uses' => 'HomeController@index',
        'as' => 'home.index',
    ]);
    Route::get('/home', 'HomeController@index');
});
