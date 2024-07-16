<?php

namespace App\Http\Controllers;

use App\Models\Kunstwerk;
use Illuminate\Http\Request;

class KunstwerkController extends Controller
{


    public function allKunstwerken(){
        $kunstwerken = Kunstwerk::all();
        return response()->json($kunstwerken, 200);
    }

    public function singleKunstwerk($slug){
        $kunstwerk = Kunstwerk::with(['kunstenaar:id,naam,email,website,slug'])->where('slug', $slug)->first();
        return response()->json($kunstwerk, 200);
    }

    /**
    * admin routes
    */
    public function index()
    {
        $kunstwerken = Kunstwerk::all();
        return view('kunstwerken.index', compact('kunstwerken'));
    }

    public function show(Kunstwerk $kunstwerken)
    {
        $kunstwerk = $kunstwerken;
        return view('kunstwerken.show', compact('kunstwerk'));
    }

    public function create()
    {
        return view('kunstwerken.create');
    }
    public function store(Request $request)
    {
        $kunstwerk = Kunstwerk::create($request->all());
        return redirect()->route('kunstwerken.show', $kunstwerk);
    }

    public function edit(Kunstwerk $kunstwerken)
    {
        $kunstwerk = $kunstwerken;
        return view('kunstwerken.edit', compact('kunstwerk'));
    }

    public function update(Request $request, Kunstwerk $kunstwerken)
    {
        $kunstwerken->update($request->all());
        $kunstwerk = $kunstwerken;
        return redirect()->route('kunstwerken.show', $kunstwerk);
    }

    public function destroy(Kunstwerk $kunstwerken)
    {
        $kunstwerk = $kunstwerken;
        $kunstwerk->delete();
        return redirect()->route('kunstwerken.index');
    }


}
