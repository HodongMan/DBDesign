<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class itemstock extends Model
{
    protected $table = 'itemstocks';
    protected $fillable = ['hqstock', 'stock', 'item_id'];

    public function item()
    {
        return $this->belongsTo(item::class);
    }
}
