<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Persondetail extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("PERSONDETAILS", function(Blueprint $table){
            $table->increments("id");
            $table->string("content");
            $table->boolean("hired")
            $table->string("phone");
            $table->date("date");
            $table->integer("salary");
            $table->string("account");

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
        Schema::drop("PERSONDETAILS");
    }
}
