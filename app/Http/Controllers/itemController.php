<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\item;

class itemController extends Controller
{
    public function index()
    {
        $item = item::all();

        return response()->json($item);
    }

    public function indexJoinDetail()
    {
        $item = item::leftjoin("itemdetails", "items.id", "=", "itemdetails.item_id")
        ->leftjoin("itemstocks", "itemdetails.item_id", "=", "itemstocks.item_id")->orderBy("itemdetails.created_at", 'desc')->get();

        return response()->json($item);
    }

    public function indexJoinDetailOrderByStock()
    {
        $item = item::leftjoin("itemdetails", "items.id", "=", "itemdetails.item_id")
        ->leftjoin("itemstocks", "itemdetails.item_id", "=", "itemstocks.item_id")->orderBy("itemstocks.stock")->get();

        return response()->json($item);
    }

    public function indexJoinToMany()
    {

    }

    public function count(){

        $item = item::distinct("type")->count();

        return response()->json($item);
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'type' => 'required'
        ]);


        $item = new item([
            'type' => $request->input('type')
        ]);

        $item->save();

        return response()->json($item);
    }

    public function update($id)
    {

    }

    public function destroy($id)
    {

    }


}
