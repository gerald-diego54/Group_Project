<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SystemController;


Route::post("/customerinfo", [SystemController::class, "create"]); // will post the new data 
Route::post("/event", [SystemController::class, "create_event"]); // will post new event for customer 
Route::get('/customer',[SystemController::class,"showCustomer"]); // will show customer data.
Route::get('/editcustomer/{id}',[SystemController::class, 'editCustomer']); //will edit customer 
Route::put('/updatecustomer/{id}',[SystemController::class, 'updateCustomer']); // will update customer 
Route::delete('/deletecustomer/{id}',[SystemController::class, 'deleteCustomer']); // will delete customer 



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
