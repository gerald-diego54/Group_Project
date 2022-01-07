<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventModel extends Model
{
    use HasFactory;
    protected $table = "event_info_table";

    // Protected Fillable
    protected $fillable = [
        "event_id",
        "customer_id",
        "event_name",
        "event_date",
        "event_status",
        "event_address_line1",
        "event_address_line2",
        "event_barangay",
        "event_city",
        "event_province",
        "event_region"
    ];
}
