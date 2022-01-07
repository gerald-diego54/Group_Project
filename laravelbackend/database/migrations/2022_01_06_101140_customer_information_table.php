<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CustomerInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer_info_table', function (Blueprint $table) {
            // $table -> engine = "InnoDB";
            $table->id("customer_id");
            $table->unsignedBigInteger('event_id');
            $table->string("first_name");
            $table->string("middle_name");
            $table->string("last_name");
            $table->integer("mobile_number");
            $table->string("email");
            $table->string("address_line1");
            $table->string("address_line2");
            $table->string("barangay");
            $table->string("city");
            $table->string("province");
            $table->string("region");
            $table->foreign('event_id') -> references('event_id')->on('event_info_table')->onDelete('cascade');
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
