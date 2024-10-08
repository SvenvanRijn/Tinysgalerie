<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{

    public function login(Request $request){
        Auth::attempt(['email' => $request->email, 'password' => $request->password]);
        return redirect('/');
    }
}
