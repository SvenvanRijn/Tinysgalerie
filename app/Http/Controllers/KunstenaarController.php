<?php

namespace App\Http\Controllers;

use App\Models\Kunstenaar;
use Illuminate\Http\Request;

class KunstenaarController extends Controller
{



    /**
    * admin routes
    */
    public function index()
    {
        $kunstenaars = Kunstenaar::all();
        return view('kunstenaars.index', compact('kunstenaars'));
    }

    public function show(Kunstenaar $kunstenaar)
    {
        return view('kunstenaars.show', compact('kunstenaar'));
    }

    public function store(Request $request)
    {
        $kunstenaar = Kunstenaar::create($request->all());
        return redirect()->route('kunstenaars.show', $kunstenaar);
    }

    public function edit(Kunstenaar $kunstenaar)
    {
        return view('kunstenaars.edit', compact('kunstenaar'));
    }

    public function create(){
        return view('kunstenaars.create');
    }
    public function update(Request $request, Kunstenaar $kunstenaar)
    {
        $kunstenaar->update($request->all());
        return redirect()->route('kunstenaars.show', $kunstenaar);
    }

    public function destroy(Kunstenaar $kunstenaar)
    {
        $kunstenaar->delete();
        return redirect()->route('kunstenaars.index');
    }
}
