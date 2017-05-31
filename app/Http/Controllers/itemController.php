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