<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\itemdetail;

class itemdetailController extends Controller
{
    public function index()
    {
        $itemdetail = itemdetail::all();

        return response()->json($itemdetail);
    }

    public function show($id)
    {
        $itemdetail = itemdetail::where('item_id', '=', $id)->firstOrFail();

        return response()->json($itemdetail);
    }

    public function search($search)
    {
        $itemdetail = itemdetail::where('name', 'like', "%$search%")->orderBy("created_at", 'desc')->limit(3)->get();

        return response()->json($itemdetail);
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'content' => 'required',
            'price' => 'required',
            'item_id' => 'required'
        ]);


        $itemdetail = new itemdetail([
            'name' => $request->input('name'),
            'content' => $request->input('content'),
            'image' => $request->input('image'),
            'price' => $request->input('price'),
            'item_id' => $request->input('item_id')
        ]);

        $itemdetail->save();

        return response()->json($itemdetail);
    }

    public function update($id)
    {

    }

    public function destroy($id)
    {

    }
}
