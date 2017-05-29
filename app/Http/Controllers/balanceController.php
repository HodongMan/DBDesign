<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\balance;

class balanceController extends Controller
{
    public function index()
    {
        $balance = balance::all();

        return response()->json($balance);
    }

    public function create(Request $request)
    {

        $this->validate($request, [
            'type' => 'required',
            'money' => 'required'
        ]);


        $balance = new balance([
            'type' => $request->input('type'),
            'money' => $request->input('money')
        ]);

        $balance->save();

        return response()->json($balance);
    }

    public function store()
    {

    }

    public function show($id)
    {

    }

    public function update($id)
    {

    }

    public function delete($id)
    {

    }
}
