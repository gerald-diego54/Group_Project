<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\CateringModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\UserCateringModel;

class SystemController extends Controller{


    public function authenticatelogin(Request $request, $username, $password){

    // Retrive data
        $data = UserCateringModel::find();
    // Retrieve front end data

    // validate
        $validate = Validator::make($request -> all(), [
            "username" => "required",
            "password" => "required" 
        ]);
        if ($validate -> fails()) return response() -> json(["status" => 422, "validate_error" => $validate]);
    
    // authenticate
        
    
    // send response

    }
}
