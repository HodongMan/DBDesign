<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\cart;

class cartController extends Controller
{
    public function index()
    {
        $cart = cart::all();

        return response()->json($cart);
    }

    public function show($id)
    {
        $cart = cart::where('person_email', $id)->leftjoin("itemdetails", "carts.item_id", "=", "itemdetails.item_id")->get();

        return response()->json($cart);
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'count' => 'required',
            'item_id' => 'required',
            'person_email' => 'required'
        ]);


        $cart = new cart([
            'count' => $request->input('count'),
            'item_id' => $request->input('item_id'),
            'person_email' => $request->input('person_email')
        ]);

        $cart->save();

        return response()->json($cart);
    }

    public function update($id)
    {

    }

    public function destroy($id)
    {

    }
}
