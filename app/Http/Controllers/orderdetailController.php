<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\orderdetail;

class orderdetailController extends Controller
{
    public function index()
    {
        $orderdetail = orderdetail::all();

        return response()->json($orderdetail);
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'date' => 'required',
            'count' => 'required',
            'content' => 'required',
            'order_id' => 'required'
        ]);


        $orderdetail = new orderdetail([
            'date' => $request->input('date'),
            'count' => $request->input('count'),
            'content' => $request->input('content'),
            'order_id' => $request->input('order_id')
        ]);

        $orderdetail->save();

        return response()->json($orderdetail);
    }

    public function update($id)
    {

    }

    public function destroy($id)
    {

    }
}
