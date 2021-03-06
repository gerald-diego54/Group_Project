<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SystemController;
use Ramsey\Uuid\Provider\Node\SystemNodeProvider;

Route::post("/customerinfo", [SystemController::class, "create"]); // will post the new data 
Route::post("/event", [SystemController::class, "create_event"]); // will post new event for customer 
Route::post("/payment",[SystemController::class,"create_payment"]); // will post new payment for customer
Route::get("/editpayment/{id}",[SystemController::class,"editPayment"]); // will show payment for customer   
Route::put("/updatepayment/{id}",[SystemController::class,"updatePayments"]); // will update customer payment
Route::get('/customer',[SystemController::class,"showCustomer"]); // will show customer data.
Route::get('/editcustomer/{id}',[SystemController::class, 'editCustomer']); //will edit customer 
Route::get('/editevent/{id}',[SystemController::class,'editEvents']); // wwill edit events
Route::put('/updateevent/{id}',[SystemController::class,'updateEvents']); //Will edit the update events 
Route::put('/updatecustomer/{id}',[SystemController::class, 'updateCustomer']); // will update customer 
Route::delete('/deletecustomer/{id}',[SystemController::class, 'deleteCustomer']); // will delete customer 
Route::get("/editproduct/{id}", [SystemController::class, "edit"]);
Route::get("/dashboard",  [SystemController::class, "dashboardDisplay"]); // dashboard
Route::get("/customerStatus", [SystemController::class, "showCustomerStatus"]); // customer status
Route::put("/markasdone/{id}", [SystemController::class,"markasDone"]); // will mark the customer event as Done
Route::put("/markaspaid/{id}", [SystemController::class,"markasPaid"]); // will mark the customer payment as paid.
Route::put("/updatecash/{id}", [SystemController::class,"updatepayment"]);
Route::put("/updatecheque/{id}", [SystemController::class,"updatecheque"]);
// 



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});