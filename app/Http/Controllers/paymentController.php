<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\payment;

class paymentController extends Controller
{
    public function index()
    {
        $payment = payment::all();

        return response()->json($payment);
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'price' => 'required',
            'content' => 'required',
            'payment' => 'required',
            'chance' => 'required',
            'date' => 'required',
            'person_email' => 'required'
        ]);


        $payment = new payment([
            'price' => $request->input('price'),
            'content' => $request->input('content'),
            'payment' => $request->input('payment'),
            'chance' => $request->input('chance'),
            'date' => $request->input('date'),
            'person_email' => $request->input('person_email')
        ]);

        $payment->save();

        return response()->json($payment);
    }

    public function update($id)
    {

    }

    public function destroy($id)
    {

    }
}
