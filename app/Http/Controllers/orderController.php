<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class orderController extends Controller
{
    public function index()
    {
        $order = order::all();

        return response()->json($order);
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'type' => 'required',
            'status' => 'required',
            'item_id' => 'required',
            'person_email' => 'required'
        ]);


        $order = new order([
            'type' => $request->input('type'),
            'status' => $request->input('status'),
            'item_id' => $request->input('item_id'),
            'person_email' => $request->input('person_email')
        ]);

        $order->save();

        return response()->json($order);
    }

    public function update($id)
    {

    }

    public function destroy($id)
    {

    }
}
