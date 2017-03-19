<?php

namespace App\Http\Controllers\Auth;

use App\Entities\User;
use App\Http\Controllers\Controller;

class ConfirmController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function confirm($token)
    {
        User::where('email_token', $token)->firstOrFail()->confirmed();

        return redirect('login')
            ->with('success', 'Email was successfully confirmed');
    }
}
