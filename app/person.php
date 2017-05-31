<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class person extends Model
{
    protected $table = 'persons';
    protected $fillable = ['email', 'name', 'password', 'isAdmin'];

    public function order()
    {
        return $this->hasMany(order::class);
    }

    public function persondetail()
    {
        return $this->hasOne(persondetail::class);
    }

    public function payment()
    {
        return $this->hasMany(payment::class);
    }

}
