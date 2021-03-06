<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class orderdetail extends Model
{
    protected $table = 'orderdetails';
    protected $fillable = ['date', 'count', 'content', 'order_id'];

    public function order()
    {
        return $this->belongsTo(order::class);
    }
}
