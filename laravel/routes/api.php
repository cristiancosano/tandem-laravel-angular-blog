<?php

use App\Models\Article;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\ArticleController;
use \App\Http\Controllers\UserController;
use \App\Http\Controllers\AuthController;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(AuthController::class)->prefix('token')->group(function(){
    Route::post('', 'login')->name('login');
    Route::delete('', 'logout')->middleware('auth:sanctum')->name('logout');
});

Route::controller(ArticleController::class)->prefix('articles')->name('articles')->group(function(){
    Route::get('', 'index')->name('index');
    Route::post('', 'store')->name('store')->middleware('auth:sanctum');
    Route::get('', 'show')->name('show');
});

Route::apiResource('articles', ArticleController::class)->except(['destroy', 'update']);
Route::apiResource('users', UserController::class)->only('store');