<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Order extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ORDERS', function (Blueprint $table) {
            $table->increments('id');
            $table->string('type');
            $table->string('status');

            $table->integer('item_id')->unsigned();
            $table->string('person_email', 100);
            $table->timestamps();

            $table->foreign('person_email')->references('email')->on('PERSONS');
            $table->foreign('item_id')->references('id')->on('ITEMS');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop("ORDERS");
    }
}
