<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Payment extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("PAYMENTS", function(Blueprint $table){
            $table->increments("id");
            $table->integer("price");
            $table->text("content");
            $table->string("payment");
            $table->string("chance");
            $table->datetime("date");

            $table->foreign('person_email')->references('email')->on('PERSONS');
            $table->timestamp();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop("PAYMENTS");
    }
}
