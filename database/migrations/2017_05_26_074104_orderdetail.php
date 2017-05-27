<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Orderdetail extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ORDERDETAILS', function (Blueprint $table) {
            $table->increments('id');
            $table->datetime('date');
            $table->integer('count');
            $table->text('content');

            $table->foreign('order_id')->references('id')->on('ORDERS');
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
        Schema::drop("ORDERDETAILS");
    }
}
