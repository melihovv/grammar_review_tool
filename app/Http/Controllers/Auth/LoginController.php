<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Forms\Auth\LoginForm;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    protected $redirectTo = '/home';

    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

    protected function validateLogin(Request $request)
    {
        $this->validate($request, [
            $this->username() => 'required|email',
            'password' => 'required',
        ]);
    }

    public function showLoginForm()
    {
        $form = $this->form(LoginForm::class, [
            'method' => 'POST',
            'url' => url('/login'),
        ]);

        return view('auth.login', compact('form'));
    }
}
