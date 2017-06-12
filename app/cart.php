<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class cart extends Model
{
    protected $table = 'carts';
    protected $fillable = ['item_id', 'person_email', 'count'];

    public function item()
    {
        return $this->belongsTo(item::class);
    }

    public function person()
    {
        return $this->belongsTo(person::class);
    }

}
