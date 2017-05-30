<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\persondetail;

class persondetailController extends Controller
{
    public function index()
    {
        $persondetail = persondetail::all();

        return response()->json($persondetail);
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'content' => 'required',
            'hired' => 'required',
            'phone' => 'required',
            'date' => 'required',
            'salary' => 'required',
            'account' => 'required',
            'person_email' => 'required'
        ]);


        $persondetail = new persondetail([
            'content' => $request->input('content'),
            'hired' => $request->input('hired'),
            'phone' => $request->input('phone'),
            'date' => $request->input('date'),
            'salary' => $request->input('salary'),
            'account' => $request->input('account'),
            'person_email' => $request->input('person_email')
        ]);

        $persondetail->save();

        return response()->json($persondetail);
    }

    public function update($id)
    {

    }

    public function destroy($id)
    {

    }
}
