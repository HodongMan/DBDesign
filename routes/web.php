<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/* BALANCE */
Route::get('/api/balance', 'balanceController@index');
Route::post('/api/balance', 'balanceController@create');

/* CALCULATE */
Route::get('/api/calculate', 'calculateController@index');
Route::post('/api/calculate', 'calculateController@create');

/* ITEM */
Route::get('/api/item', 'itemController@index');
Route::post('/api/item', 'itemController@create');

/* ITEMDETAIL */
Route::get('/api/itemdetail', 'itemdetailController@index');
Route::post('/api/itemdetail', 'itemdetailController@create');

/* ITEMEVENT */
Route::get('/api/itemevent', 'itemeventController@index');
Route::post('/api/itemevent', 'itemeventController@create');

/* ITEMSTOCK */
Route::get('/api/itemstock', 'itemeventController@index');
Route::post('/api/itemstock', 'itemeventController@create');

/* ORDER */
Route::get('/api/order', 'itemeventController@index');
Route::post('/api/order', 'itemeventController@create');

/* ORDERDETAIL */
Route::get('/api/orderdetail', 'itemeventController@index');
Route::post('/api/orderdetail', 'itemeventController@create');

/* PAYMEnT */
Route::get('/api/payment', 'itemeventController@index');
Route::post('/api/payment', 'itemeventController@create');

/* PERSON */
Route::get('/api/person', 'itemeventController@index');
Route::post('/api/person', 'itemeventController@create');

/* PERSONDETAIL */
Route::get('/api/persondetail', 'itemeventController@index');
Route::post('/api/persondetail', 'itemeventController@create');
