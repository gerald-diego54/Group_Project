<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\CateringModel;
use Illuminate\Http\Request;

class SystemController extends Controller{


    public function create(Request $request){
        $validator = Validator::make($request -> all(), [
            "first_name" => "required",
            "middle_name" => "required",
            "last_name" => "required",
            "mobile_number" => "required",
            "email" => "required",
            "address_line1" => "required",
            "address_line2" => "required",
            "barangay" => "required",
            "city" => "required",
            "province" => "required",
            "region" => "required"
        ]);
        if ($validator->fails()) {
            return response()->json(["status" => 422, "validateerror" => $validator -> errors()]);
        } 
        
        else {
            $data = new CateringModel();
            $data -> first_name = $request -> input("first_name");
            $data -> middle_name = $request -> input("middle_name");
            $data -> last_name = $request -> input("last_name");
            $data -> mobile_number = $request -> input("mobile_number");
            $data -> email = $request -> input("email");
            $data -> address_line1 = $request -> input("address_line1");
            $data -> address_line2 = $request -> input("address_line2");
            $data -> barangay = $request -> input("barangay");
            $data -> city = $request -> input("city");
            $data -> province = $request -> input("province");
            $data -> region = $request -> input("region");
            $data->save();
            return response()->json(["status" => 200, "message" => "Customer Information added successfully!"]);
        }
    }
}