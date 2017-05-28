<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class order extends Model
{
    protected $fillable = ['type', 'status', 'item_id', 'person_email'];

    public function item()
    {
        return $this->belongsTo(item::class);
    }

    public function user()
    {
        return $this->belongsTo(item::class);
    }

    public function orderdetail()
    {
        return $this->hasOne(orderdetail::class);
    }
}
