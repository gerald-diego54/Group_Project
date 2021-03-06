<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentModel extends Model
{
    use HasFactory;

    // Protected Data
    protected $table = "customer_payment";

    // Protected Fillable
    protected $fillable = [
        "id",
        "payment_type",
        "amount", // int datatype?
        "downpayment", 
        "collectibles",
        "bank_name",
        "cheque_code",
        "payment_status"
    ];
}