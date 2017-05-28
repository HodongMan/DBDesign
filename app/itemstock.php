<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class itemstock extends Model
{
    protected $fillable = ['hqstock', 'stock'];

    public function item()
    {
        return $this->belongsTo(item::class);
    }
}
