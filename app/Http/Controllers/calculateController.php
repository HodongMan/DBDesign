<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\calculate;

class calculateController extends Controller
{
    public function index()
    {
        $calculate = calculate::all();

        return response()->json($calculate);
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'content' => 'required'
        ]);


        $calculate = new calculate([
            'content' => $request->input('content')
        ]);

        $calculate->save();

        return response()->json($calculate);
    }

    public function update($id)
    {

    }

    public function delete($id)
    {

    }
}
