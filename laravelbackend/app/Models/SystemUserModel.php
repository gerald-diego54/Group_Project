<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCateringModel extends Model
{
    use HasFactory;

    protected $table = "sytem_user_table";

    protected $fillable = [
        "first_name",
        "last_name",
        "email",
        "password",
        "user_role"
    ];
    
}
