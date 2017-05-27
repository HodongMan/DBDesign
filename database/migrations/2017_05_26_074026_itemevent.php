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
        Schema::create("ITEMDETAILS", function(Blueprint $table){
            $table->increments("id");
            $table->integer("sale");
            $table->string("freeset");
            $table->string("hold");
            $table->string("gift");
            $table->string("validity");

            $table->foreign('item_id')->references('id')->on('ITEMS');
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
        Schema::drop("ITEMEVENTS");
    }
}
