<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Itemdetail extends Migration
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
            $table->string("name");
            $table->text("content");
            $table->string("image");
            $table->integer("price");

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
        Schema::drop("ITEMDETAILS");
    }
}
