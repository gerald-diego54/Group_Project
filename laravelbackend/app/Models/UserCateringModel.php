<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCateringModel extends Model
{
    use HasFactory;

    protected $table = ["user"];

    protected $fillable = [
        "username",
        "password"
    ];
    
}
