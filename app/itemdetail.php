<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class itemdetail extends Model
{
    protected $fillable = ['name', 'content', 'image', 'price', 'item_id'];

    public function item()
    {
        return $this->belongsTo(item::class);
    }
}
