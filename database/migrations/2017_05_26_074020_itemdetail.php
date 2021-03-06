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
        Schema::create("itemdetails", function(Blueprint $table){
            $table->increments("id");
            $table->string("name");
            $table->text("content");
            $table->string("image")->default("http://placehold.it/320x150");
            $table->integer("price");

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
        Schema::drop("itemdetails");
    }
}
