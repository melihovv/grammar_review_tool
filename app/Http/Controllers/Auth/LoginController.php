<?php

namespace App\Http\Controllers\Auth;

use App\Entities\User;
use App\Http\Controllers\Controller;
use App\Http\Forms\Auth\LoginForm;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);

        $this->redirectTo = route('grammars.index');
    }

    protected function validateLogin(Request $request)
    {
        $this->validate($request, [
            $this->username() => 'required|email',
            'password' => 'required',
            'g-recaptcha-response' => 'required|captcha',
        ], [
            'g-recaptcha-response.*' => Lang::get('auth.captcha_failed'),
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

    protected function credentials(Request $request)
    {
        return array_merge(
            $request->only($this->username(), 'password'),
            ['confirmed' => true]
        );
    }

    protected function sendFailedLoginResponse(Request $request)
    {
        $user = User::where('email', $request->get('email'))->first();

        $response = redirect()->back()
            ->withInput($request->only($this->username(), 'remember'));

        if ($user === null || $user->confirmed) {
            return $response
                ->withErrors([
                    $this->username() => Lang::get('auth.failed'),
                ]);
        } else {
            return $response
                ->with('warning', Lang::get('auth.email_not_confirmed'));
        }
    }
}
