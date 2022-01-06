<?php


//Seperate Controller

namespace App\Http\Controllers;
use App\Models\CateringModel;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class CustomerController extends Controller
{
    //This is the customer controller

    Public function index(){
            $Customer = CateringModel::all();
            return response()->json(['status'=>200,"customer"=>$Customer]);
    }

    public function edit($id){
        $Customer= CateringModel::find($id);
        //validation phase
        if($Customer){
            return response()->json(['status'=>200,"customer"=>$Customer]);
        }
        else{
            return response()->json(['status'=>404,"message"=>'No customer ID found ']);
        }
    }

    public function delete($id){
        $Customer = CateringModel::find($id);
        if($Customer){
            $Customer-> delete();
            return response()->json(['status'=>200,"message"=>'Customer deleted successfully!']);
        }
        else{
            return response()->json(['status'=>404,"message"=>'No Customer ID found!']);
        }
    }

    //creating a customer record
    public function create(Request $request){
        //field validator 
        $validator = Validator::make($request-> all(),[
            "first_name"=>"required", 
            "last-name"=>"required",
            "mobile_number"=>"required",
            "email"=>"required",
            "event_name"=>"required",
            ""
        ]);
        if($validator->fails()){
            return response()->json(['status'=>422,"validate_err"=>$validator->errors()]);
        }else{
            //if the fields !empty then proceed to this line
            $Customer = new CateringModel(); 
            $Customer-> name = $request-> input('name');
            $Customer-> description = $request-> input('description');
            $Customer-> price = $request-> input('price');
            $Customer-> inStock = $request-> input('inStock');
            $Customer-> save();
            return response()->json(['status'=>200,'message'=>'product successfully added!']);

        }
    }
}
