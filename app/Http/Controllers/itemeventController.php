<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\itemevent;

class itemeventController extends Controller
{
    public function index()
    {
        $itemevent = itemevent::all();

        return response()->json($itemevent);
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'item_id' => 'required'
        ]);


        $itemevent = new itemevent([
            'sale' => $request->input('sale'),
            'freeset' => $request->input('freeset'),
            'hold' => $request->input('hold'),
            'gift' => $request->input('gift'),
            'validity' => $request->input('validity'),
            'item_id' => $request->input('item_id')
        ]);

        $itemevent->save();

        return response()->json($itemevent);
    }

    public function update($id)
    {

    }

    public function destroy($id)
    {

    }
}
