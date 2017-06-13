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
Route::get('/api/item/itemdetail', 'itemController@indexJoinDetail');
Route::get('/api/item/itemdetail/stock', 'itemController@indexJoinDetailOrderByStock');
Route::post('/api/item', 'itemController@create');


/* ITEMDETAIL */
Route::get('/api/itemdetail/', 'itemdetailController@index');
Route::get('/api/itemdetail/{id}', 'itemdetailController@show');
Route::get("/api/itemdetail/search/{search}", 'itemdetailController@search');
Route::post('/api/itemdetail', 'itemdetailController@create');

/* ITEMEVENT */
Route::get('/api/itemevent', 'itemeventController@index');
Route::post('/api/itemevent', 'itemeventController@create');

/* ITEMSTOCK */
Route::get('/api/itemstock', 'itemstockController@index');
Route::post('/api/itemstock', 'itemstockController@create');

/* ORDER */
Route::get('/api/order', 'orderController@index');
Route::post('/api/order', 'orderController@create');

/* ORDERDETAIL */
Route::get('/api/orderdetail', 'orderdetailController@index');
Route::post('/api/orderdetail', 'orderdetailController@create');

/* PAYMEnT */
Route::get('/api/payment', 'paymentController@index');
Route::post('/api/payment', 'paymentController@create');

/* PERSON */
Route::get('/api/person', 'personController@index');
Route::get('/api/person/hire', 'personController@hire');
Route::get('/api/person/fire', 'personController@fire');
Route::post('/api/person', 'personController@create');

/* PERSONDETAIL */
Route::get('/api/persondetail', 'persondetailController@index');
Route::post('/api/persondetail', 'persondetailController@create');

/* CART */
Route::get('/api/cart', 'cartController@index');
Route::get('/api/cart/{id}', 'cartController@show');
Route::post('/api/cart', 'cartController@create');
Route::delete('/api/cart/{id}', 'cartController@destroy');
