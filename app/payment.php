<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class payment extends Model
{
    protected $fillable = ['price', 'content', 'payment', 'chance', 'date', 'person_email'];

    public function person()
    {
        return $this->belongsTo(person::class);
    }
}
