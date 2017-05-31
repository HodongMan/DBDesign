<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class balance extends Model
{
    protected $table = 'balances';
    protected $fillable = ['type', 'money'];
}
