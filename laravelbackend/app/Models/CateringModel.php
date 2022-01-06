<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CateringModel extends Model
{
    use HasFactory;

    // Protected Data
    protected $table = "customer_info_table";

    // Protected Fillable
    protected $fillable = [
        "first_name",
        "middle_name",
        "last_name",
        "mobile_number",
        "email",
        "address_line1",
        "address_line2",
        "barangay",
        "city",
        "province",
        "region"
    ];
}
