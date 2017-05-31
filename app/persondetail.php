<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class persondetail extends Model
{
    protected $table = 'persondetails';
    protected $fillable = ['content', 'hired', 'phone', 'date', 'salary', 'account', 'person_email'];

    public function person()
    {
        return $this->belongsTo(person::class);
    }
}
