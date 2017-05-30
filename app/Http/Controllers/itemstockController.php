<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\itemstock;

class itemstockController extends Controller
{
    public function index()
    {
        $itemstock = itemstock::all();

        return response()->json($itemstock);
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'hqstock' => 'required',
            'stock' => 'required',
            'item_id' => 'required'
        ]);


        $itemstock = new itemstock([
            'hqstock' => $request->input('hqstock'),
            'stock' => $request->input('stock'),
            'item_id' => $request->input('item_id')
        ]);

        $itemstock->save();

        return response()->json($itemstock);
    }

    public function update($id)
    {

    }

    public function destroy($id)
    {

    }
}
