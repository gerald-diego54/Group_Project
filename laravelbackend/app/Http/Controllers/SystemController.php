<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use App\Models\CateringModel;
use Illuminate\Http\Request;
use App\Models\EventModel;
use App\Models\PaymentModel;

class SystemController extends Controller
{

    //This function will return the data of Customer
    public function showCustomer()
    { //similar to index
        $Customer = CateringModel::all();//
        return response()->json(['status' => 200, "customer" => $Customer]);
    }

    //This function will return the events of the customer
    public function showEvents()
    {
        $Events = EventModel::all();
        return response()->json(['status' => 200, "events" => $Events]);
    }

    //This function will return the payment of customer 
    public function showPayment(){
        $payment = PaymentModel::all();
        return response()->json(['status' =>200, "payment" =>$payment]);
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
        $events = EventModel::find($id);
        if ($events) {
            return response()->json(['status' => 200, "events" => $events]);
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
            return response()->json(["status" => 422, "message" => "Required Fields!"]);
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
            return response()->json(["status" => 200, "message" => "Customer Information added successfully!","confirmMessage"=>"if you add this , you will then proceed to adding of events."]);
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
            return response()->json(["status" => 422, "message" => "Customer Information Update Error!"]);

           }        
        } 
    }
      //Updating events function
      public function updateEvents(Request $request ,$id){
        $validator = Validator::make($request-> all(),[
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
        if($validator->fails()){
            return response()->json(['status'=>422,"validationError"=>$validator->errors()]);
        }else{
            $customer = EventModel::find($id);
            if ($customer){
                $customer->event_name = $request->input("event_name");
                $customer->event_date = $request->input("event_date");
                $customer->event_status = $request->input("event_status");
                $customer->event_address_line1 = $request->input("event_address_line1");
                $customer->event_address_line2 = $request->input("event_address_line2");
                $customer->event_barangay = $request->input("event_barangay");
                $customer->event_city = $request->input("event_city");
                $customer->event_province = $request->input("event_province");
                $customer->event_region = $request->input("event_region");
                $customer->update();
                return response()->json(["status" => 200, "message" => "Customer event Updated Successfully."]);
            }
           else{
            return response()->json(["status" => 422, "message" => "Customer event Update Error!"]);

           }        
        } 
    }

    

    public function deleteCustomer($id)
    {
        $customer = CateringModel::find($id);
        $events = EventModel::find($id);
        $payment = PaymentModel::find($id);
        if ($customer) {
            $customer->delete();
            $events->delete();
            $payment->delete();  
            return response()->json(['status' => 200, "message" => 'Product deleted successfully!']);
        } else {
            return response()->json(['status' => 404, "message" => 'No product ID found!']);
        }
    }
    public function deleteEvents($id) // this block is unused
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
            return response()->json(["status" => 200, "message" => "Customer Event Information added successfully!", "confirmMessage"=>"if you add this , you will then proceed to adding of payment method."]);
        }
    }
 
    //This block will add new payment method for the customer for cheque
    public function create_payment(Request $request){
        $validator = Validator::make($request->all(), [
            "payment_type" => "required",
           
        ]);
        if ($validator->fails()) {
            return response()->json(["status" => 422, "validate_err" => $validator->errors()]);
        } else {
            //if the conditions !=true then will proceed to this block
            $customer = new PaymentModel();
            $customer->payment_type = $request->input("payment_type");
            $customer->amount = $request->input("amount");
            $customer->downpayment = $request->input("downpayment");
            $customer->collectibles = $request->input("collectibles");
            $customer->bank_name = $request->input("bank_name");
            $customer->cheque_code = $request->input("cheque_code");
            $customer->payment_status = $request->input("payment_status");
            $customer->save();
            return response()->json(["status" => 200, "message" => "Customer Payment added successfully!"]);
        }
    }

    //This block will edit the customer payment  based on ID.
    public function editPayment($id)
    {
        $payment = PaymentModel::find($id);
        if ($payment) {
            return response()->json(['status' => 200, "payments" => $payment]);
        } else {
            return response()->json(['status' => 404, "message" => 'No customer ID found!']);
        }
    }

     //Updating events function
     public function updatePayments(Request $request ,$id){
        $validator = Validator::make($request-> all(),[
            "payment_type" => "required",
            // "amount" => "required", //not yet required
            // "downpayment" => "required", //not yet required
            // "collectibles" => "required", //not yet required
            // "bank_name" => "required", //not yet required
            // "code" => "required", //not yet rutequired
        ]);  
        if($validator->fails()){
            return response()->json(['status'=>422,"validationError"=>$validator->errors()]);
        }else{
            $payment  = PaymentModel::find($id);
            if ($payment){
                $payment->payment_type = $request->input("payment_type");
                $payment->amount = $request->input("amount");
                $payment->downpayment = $request->input("downpayment");
                $payment->collectibles = $request->input("collectibles");
                $payment->bank_name = $request->input("bank_name");
                $payment->code = $request->input("cheque_code");
                $payment->payment_status = $request->input("payment_status");
                $payment->update();
                return response()->json(["status" => 200, "message" => "Customer Payment Updated Successfully."]);
            }
           else{
            return response()->json(["status" => 422, "message" => "Customer Payment update Error!"]);

           }        
        } 
    }
  

    public function edit($id)
    {
        $customer = CateringModel::find($id);
        $events = EventModel::find($id);  //redundant line? same to line 40-48
        if ($customer) return response()->json(["status" => 200, "customer" => $customer, "event" => $events]);
        else return response()->json(["status" => 404, "message" => "No product ID found!"]);
    }

    public function upcommingEvent()
    {
        $event = EventModel::select('event_name', 'event_date', 'event_status')
            ->where('event_status', 'Pending')
            ->orderBy('event_date', 'ASC')
            ->first();

        return response()->json(['status' => 200, "event" => $event]);
    }

    public function showTotalSales()
    {
        $sales = PaymentModel::all()
            ->sum('amount');

        return response()->json(['status' => 200, "total" => $sales]);
    }

    public function dashboardDisplay()
    {
        $noOfCustomer = CateringModel::all()
            ->count();

        $event = EventModel::select('event_name', 'event_date', 'event_status')
            ->where('event_status', 'Pending')
            ->orderBy('event_date', 'ASC')
            ->first();

            $payment = PaymentModel::all();
            $sales =  $payment->sum('amount');
            $collect =  $payment->sum('collectibles');
           
    
        return response()->json(['status' => 200, 
            "total_customer" => $noOfCustomer,
            "total" => $sales,
            "collectibles" => $collect,
            "event" => $event]);


            //TEST 
             $eventCount =  EventModel::all()
            ->groupBy('event_date','month')
            ->count();
          
                 return response()->json(['status'=> 200, "eventcount" =>$eventCount]);
    }

    public function markasDone(Request $request ,$id){
        $event  = EventModel::find($id);
        if ($event){
            $event->event_status ="Done";
            $event->update();
            return response()->json(["status" => 200, "message" => "Customer Payment Updated Successfully."]);
        }
       else{
        return response()->json(["status" => 422, "message" => "Customer Payment update Error!"]);

       }      
    }

    public function markasPaid (Request $request, $id){
        $payment  = PaymentModel::find($id);
        if ($payment){
            $payment->payment_status = "Paid";
            $payment->update();
            return response()->json(["status" => 200, "message" => "Customer Payment Updated Successfully."]);
        }
       else{
        return response()->json(["status" => 422, "message" => "Customer Payment update Error!"]);

       }      
    }

    public function showCustomerStatus()
    {
        $customers = CateringModel::select(
            'id', 
            'first_name',
            'middle_name',
            'last_name')
            ->get();

        $events = EventModel::select(
            'event_name',
            'event_date',
            'event_status')
            ->get();

        $payments = PaymentModel::select(
            'amount',
            'payment_status')
            ->get();

        $row = count($customers);

        return response()->json(['status' => 200,
        "customers" => $customers,
        "events" => $events,
        "payments" => $payments,
        "row_count" => $row]);

        return response()->json([
            'status'=>200,
            'customers'=> [
                $customers,
                $events,
                $row]
        ]);
    }

}
