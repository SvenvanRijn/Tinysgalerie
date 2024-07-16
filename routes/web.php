<?php

use App\Http\Controllers\KunstenaarController;
use App\Http\Controllers\KunstwerkController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/loginpage', function () {
    return view('auth.login');
});
Route::post('/login', [LoginController::class, 'login'])->name('login');
Route::get('/', function () {
    return view('welcome');
});
Route::prefix('api')->group(function () {
    Route::get('/kunstwerken', [KunstwerkController::class, 'allKunstwerken']);
    Route::get('/kunstwerken/{slug}', [KunstwerkController::class, 'singleKunstwerk']);

    Route::get('/kunstenaars', [KunstenaarController::class, 'allKunstenaars']);
    Route::get('/kunstenaars/{slug}', [KunstenaarController::class, 'singleKunstenaar']);
});

Route::group(['middleware' => 'web'], function () {
    Route::resource('kunstenaars', KunstenaarController::class);
    Route::resource('kunstwerken', KunstwerkController::class);
});
