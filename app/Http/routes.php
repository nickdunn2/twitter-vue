<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::auth();

Route::get('/home', 'HomeController@index');

Route::group(['prefix' => 'api'], function () {

    Route::post('tweets/likes/{tweet_id}', 'TweetsController@like');
    Route::delete('tweets/likes/{tweet_id}', 'TweetsController@unlike');

    Route::resource('users', 'UsersController', [
        'except' => ['create', 'edit', 'store']
    ]);

    Route::resource('tweets', 'TweetsController', [
        'except' => ['create', 'edit']
    ]);

    Route::group(['middleware' => 'auth'], function() {
        Route::resource('tweets', 'TweetsController', [
            'only' => ['store', 'update', 'destroy']
        ]);
    });

});

