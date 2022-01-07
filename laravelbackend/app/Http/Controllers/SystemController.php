<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\CateringModel;
use Illuminate\Http\Request;
use App\Models\EventModel;

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
            return response() -> json(["status" => 422, "validate_err" => $validator -> errors()]);
        } 
        // OOP Arrow
        else {
            $customer = new CateringModel();
            $customer -> first_name = $request -> input("first_name");
            $customer -> middle_name = $request -> input("middle_name");
            $customer -> last_name = $request -> input("last_name");
            $customer -> mobile_number = $request -> input("mobile_number");
            $customer -> email = $request -> input("email");
            $customer -> address_line1 = $request -> input("address_line1");
            $customer -> address_line2 = $request -> input("address_line2");
            $customer -> barangay = $request -> input("barangay");
            $customer -> city = $request -> input("city");
            $customer -> province = $request -> input("province");
            $customer -> region = $request -> input("region");
            $customer->save();
            return response()->json(["status" => 200, "message" => "Customer Information added successfully!"]);
        }
    }


    public function create_event(Request $request){
        $validator = Validator::make($request -> all(), [
            event_name: "",
            event_date: "",
            event_status: "",
            event_address_line1: "",
            event_address_line2: "",
            event_barangay: "",
            event_city: "",
            event_province: "",
            event_region: ""
        ]);
        if ($validator->fails()) { 
            return response() -> json(["status" => 422, "validate_err" => $validator -> errors()]);
        } 
        // OOP Arrow
        else {
            $customer = new EventModel();
            $customer -> first_name = $request -> input("first_name");
            $customer -> middle_name = $request -> input("middle_name");
            $customer -> last_name = $request -> input("last_name");
            $customer -> mobile_number = $request -> input("mobile_number");
            $customer -> email = $request -> input("email");
            $customer -> address_line1 = $request -> input("address_line1");
            $customer -> address_line2 = $request -> input("address_line2");
            $customer -> barangay = $request -> input("barangay");
            $customer -> city = $request -> input("city");
            $customer -> province = $request -> input("province");
            $customer -> region = $request -> input("region");
            $customer->save();
            return response()->json(["status" => 200, "message" => "Customer Information added successfully!"]);
        }
    }
}