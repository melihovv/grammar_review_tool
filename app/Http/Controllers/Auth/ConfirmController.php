<?php

namespace App\Http\Controllers\Auth;

use App\Entities\User;
use App\Http\Controllers\Controller;
use App\Http\Forms\Auth\RegisterForm;
use Facades\App\Services\UserService;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;
use Illuminate\Validation\Rule;
use Validator;

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
