<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EventInfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('event_info_table', function (Blueprint $table) {
            $table->id();
            $table-> string("event_name");
            $table-> date("event_date");
            $table-> string("event_status");
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
        Schema::dropIfExists('event_info_table');
    }
}
