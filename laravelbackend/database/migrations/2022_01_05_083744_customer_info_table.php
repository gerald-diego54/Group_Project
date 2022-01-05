<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CustomerInfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer_info_table', function (Blueprint $table) {
            $table->id();
            $table-> string("first_name");
            $table-> string("middle_name");
            $table-> string("last-name");
            $table-> integer("mobile_number");
            $table-> string("email");
            $table-> string("event_name");
            $table-> date("event_date");
            $table-> string("event_status");
            $table-> string("address_line1");
            $table-> string("address_line2");
            $table-> string("barangay");
            $table-> string("city");
            $table-> string("province");
            $table-> string("region");
            $table-> string("event_address_line1");
            $table-> string("event_address_line2");
            $table-> string("event_barangay");
            $table-> string("event_city");
            $table-> string("event_province");
            $table-> string("event_region");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('customer_info_table');
    }
}
