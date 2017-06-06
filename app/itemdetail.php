<?php

namespace App;

use Laravel\Scout\Searchable;

use Illuminate\Database\Eloquent\Model;

class itemdetail extends Model
{
    use Searchable;

    protected $table = 'itemdetails';
    protected $fillable = ['name', 'content', 'image', 'price', 'item_id'];

    public function item()
    {
        return $this->belongsTo(item::class);
    }

    public function searchableAs()
    {
        return 'name';
    }

    public function toSearchableArray()
    {
        $array = $this->toArray();

        // Customize array...

        return $array;
    }

}
