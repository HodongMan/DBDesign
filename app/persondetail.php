<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class persondetail extends Model
{
    protected $fillable = ['content', 'hired', 'phone', 'date', 'salary', 'account', 'person_email'];

    public function user()
    {
        return $this->belongsTo(user::class);
    }
}
