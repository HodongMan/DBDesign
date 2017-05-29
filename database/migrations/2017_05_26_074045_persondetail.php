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
        Schema::create("persondetails", function(Blueprint $table){
            $table->increments("id");
            $table->string("content");
            $table->boolean("hired");
            $table->string("phone");
            $table->date("date");
            $table->integer("salary");
            $table->string("account");

            $table->string('person_email', 100);
            $table->timestamps();

            $table->foreign('person_email')->references('email')->on('persons');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop("persondetails");
    }
}
