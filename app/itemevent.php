<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class itemevent extends Model
{
    protected $fillable = ['sale', 'freeset', 'hold', 'gift', 'validity', 'item_id'];

    public function item()
    {
        return $this->belongsTo(item::class);
    }
}
