<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Cart extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carts', function(Blueprint $table){
            $table->increments('id');
            $table->integer('count');

            $table->integer('item_id')->unsigned();
            $table->string('person_email', 100);
            $table->timestamps();

            $table->foreign('person_email')->references('email')->on('persons');
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
        Schema::drop("carts");
    }
}
