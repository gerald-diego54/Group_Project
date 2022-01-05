<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CateringModel extends Model
{
    use HasFactory;

    // Protected Data
    protected $table = ["customer_info_table"];

    // Protected Fillable
    protected $fillable = [
        "first_name",
        "middle_name",
        "last-name",
        "mobile_number",
        "email",
        "event_name",
        "event_date",
        "event_status",
        "address_line1",
        "address_line2",
        "barangay",
        "city",
        "province",
        "region",
        "event_address_line1",
        "event_address_line2",
        "event_barangay",
        "event_city",
        "event_province",
        "event_region"
    ];
}
