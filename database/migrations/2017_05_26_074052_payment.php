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
        Schema::create("payments", function(Blueprint $table){
            $table->increments("id");
            $table->integer("price");
            $table->text("content");
            $table->string("payment");
            $table->string("chance");
            $table->datetime("date");

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
        Schema::drop("payments");
    }
}
