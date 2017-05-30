<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Itemevent extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("itemevents", function(Blueprint $table){
            $table->increments("id");
            $table->integer("sale")->nullable();
            $table->string("freeset")->nullable();
            $table->string("hold")->nullable();
            $table->string("gift")->nullable();
            $table->string("validity")->nullable();

            $table->integer('item_id')->unsigned();
            $table->timestamps();

            $table->foreign('item_id')->references('id')->on('items');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop("itemevents");
    }
}
