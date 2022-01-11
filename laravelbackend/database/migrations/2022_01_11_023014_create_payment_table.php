<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer_payment', function (Blueprint $table) {
            $table->id();
            $table->string('payment_type');
            $table->integer('amount')->nullable();
            $table->integer('downpayment')->nullable();
            $table->integer('collectibles')->nullable();
            $table->string('bank_name')->nullable();
            $table->string('code')->nullable();
            $table->foreign('id')->references('id')->on('customer_info_table')->onDelete('cascade');
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
        Schema::dropIfExists('customer_payment');
    }
}
