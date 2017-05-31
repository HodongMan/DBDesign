<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class calculate extends Model
{
    protected $table = 'calculates';
    protected $fillable = ['content'];
}
