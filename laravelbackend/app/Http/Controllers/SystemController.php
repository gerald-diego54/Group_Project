<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use App\Models\CateringModel;
use Illuminate\Http\Request;
use App\Models\EventModel;

class SystemController extends Controller
{

    //This function will return the data of Customer
    public function showCustomer()
    { //similar to index
        $Customer = CateringModel::all();
        return response()->json(['status' => 200, "customer" => $Customer]);
    }

    //This function will return the events of the customer
    public function showEvents()
    {
        $Events = EventModel::all();
        return response()->json(['statys' => 200, "events" => $Events]);
    }

    //This block will edit the customer based on ID.
    public function editCustomer($id)
    {
        $Customer = CateringModel::find($id);
        if ($Customer) {
            return response()->json(['status' => 200, "customer" => $Customer]);
        } else {
            return response()->json(['status' => 404, "message" => 'No customer ID found!']);
        }
    }

    //This block will edit the customer Events based on ID.
    public function editEvents($id)
    {
        $Events = EventModel::find($id);
        if ($Events) {
            return response()->json(['status' => 200, "events" => $Events]);
        } else {
            return response()->json(['status' => 404, "message" => 'No customer ID found!']);
        }
    }

    public function create(Request $request)
    {
        //This block will create a new record
        $validator = Validator::make($request->all(), [
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
            return response()->json(["status" => 422, "message" => "Error! , Please fill out the missing fields."]);
        }
        // if validations are not met , proceed to this line
        else {
            $customer = new CateringModel(); // instantiate the customer model 
            $customer->first_name = $request->input("first_name");
            $customer->middle_name = $request->input("middle_name");
            $customer->last_name = $request->input("last_name");
            $customer->mobile_number = $request->input("mobile_number");
            $customer->email = $request->input("email");
            $customer->address_line1 = $request->input("address_line1");
            $customer->address_line2 = $request->input("address_line2");
            $customer->barangay = $request->input("barangay");
            $customer->city = $request->input("city");
            $customer->province = $request->input("province");
            $customer->region = $request->input("region");
            $customer->save();
            return response()->json(["status" => 200, "message" => "Customer Information added successfully!"]);
        }
    }

    //Updating customer function
    public function updateCustomer(Request $request ,$id){
        $validator = Validator::make($request-> all(),[
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
        if($validator->fails()){
            return response()->json(['status'=>422,"validationError"=>$validator->errors()]);
        }else{
            $customer = CateringModel::find($id);
            if ($customer){
                $customer->first_name = $request->input("first_name");
                $customer->middle_name = $request->input("middle_name");
                $customer->last_name = $request->input("last_name");
                $customer->mobile_number = $request->input("mobile_number");
                $customer->email = $request->input("email");
                $customer->address_line1 = $request->input("address_line1");
                $customer->address_line2 = $request->input("address_line2");
                $customer->barangay = $request->input("barangay");
                $customer->city = $request->input("city");
                $customer->province = $request->input("province");
                $customer->region = $request->input("region");
                $customer->update();
                return response()->json(["status" => 200, "message" => "Customer Information Updated Successfully."]);
            }
           else{
            return response()->json(["status" => 422, "message" => "Customer Information Update Erro!"]);

           }        
        } 
    }

    public function deleteCustomer($id)
    {
        $customer = CateringModel::find($id);
        $events = EventModel::find($id);
        if ($customer) {
            $customer->delete();
            $events->delete();
            return response()->json(['status' => 200, "message" => 'Product deleted successfully!']);
        } else {
            return response()->json(['status' => 404, "message" => 'No product ID found!']);
        }
    }
    public function deleteEvents($id)
    {
        $events = EventModel::find($id);
        if ($events) {
            $events->delete();
            return response()->json(['status' => 200, "message" => 'Product deleted successfully!']);
        } else {
            return response()->json(['status' => 404, "message" => 'No product ID found!']);
        }
    }


    public function create_event(Request $request)
    {
        //This block will create a record for the customer event 
        $validator = Validator::make($request->all(), [
            "event_name" => "required",
            "event_date"  => "required",
            "event_status"  => "required",
            "event_address_line1" => "required",
            "event_address_line2"  => "required",
            "event_barangay" => "required",
            "event_city" => "required",
            "event_province" => "required",
            "event_region" => "required"
        ]);
        if ($validator->fails()) {
            return response()->json(["status" => 422, "validate_err" => $validator->errors()]);
        } else {
            //if the conditions !=true then will proceed to this block
            $customer = new EventModel();
            $customer->event_name = $request->input("event_name");
            $customer->event_date = $request->input("event_date");
            $customer->event_status = $request->input("event_status");
            $customer->event_address_line1 = $request->input("event_address_line1");
            $customer->event_address_line2 = $request->input("event_address_line2");
            $customer->event_barangay = $request->input("event_barangay");
            $customer->event_city = $request->input("event_city");
            $customer->event_province = $request->input("event_province");
            $customer->event_region = $request->input("event_region");
            $customer->save();
            return response()->json(["status" => 200, "message" => "Customer Event Information added successfully!"]);
        }
    }


    public function edit($id)
    {
        $customer = CateringModel::find($id);
        $events = EventModel::find($id);
        if ($customer) return response()->json(["status" => 200, "customer" => $customer, "event" => $events]);
        else return response()->json(["status" => 404, "message" => "No product ID found!"]);
    }
}
