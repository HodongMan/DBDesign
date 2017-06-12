<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class item extends Model
{
    protected $table = 'items';
    protected $fillable = ['type'];

    public function itemdetail()
    {
        return $this->hasOne(itemdetail::class);
    }

    public function itemevent()
    {
        return $this->hasMany(itemevent::class);
    }

    public function itemstock()
    {
        return $this->hasOne(itemstock::class);
    }

    public function order()
    {
        return $this->hasMany(order::class);
    }

    public function cart()
    {
        return $this->hasMany(cart::class);
    }
}
