<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SystemController;

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
// Route::post("/loginvalidate", [SystemController::class, "authenticatelogin"]);
Route::post("/customerinfo", [SystemController::class, "create"]); // will post the new data 
Route::post("/event", [SystemController::class, "create_event"]);
Route::get('/customer',[SystemController::class,"showCustomer"]);




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
