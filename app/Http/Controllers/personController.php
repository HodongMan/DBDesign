<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\person;

class personController extends Controller
{
    public function index()
    {
        $person = person::all();

        return response()->json($person);
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'email' => 'required',
            'name' => 'required',
            'password' => 'required',
            'isAdmin' => 'required'
        ]);


        $person = new person([
            'email' => $request->input('email'),
            'name' => $request->input('name'),
            'password' => $request->input('password'),
            'isAdmin' => $request->input('isAdmin')
        ]);

        $person->save();

        return response()->json($person);
    }

    public function update($id)
    {

    }

    public function destroy($id)
    {

    }
}
