<?php

namespace App\Http\Controllers\Auth;

use App\Entities\User;
use App\Http\Controllers\Controller;
use App\Http\Forms\Auth\RegisterForm;
use App\Services\UserService;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Validator;

class RegisterController extends Controller
{
    use RegistersUsers;

    protected $redirectTo = '/home';

    public function __construct()
    {
        $this->middleware('guest');
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => [
                'required',
                'max:255',
                Rule::unique('users'),
            ],
            'email' => [
                'required',
                'email',
                'max:255',
                Rule::unique('users'),
            ],
            'password' => 'required|min:6|confirmed',
            'g-recaptcha-response' => 'required|captcha',
        ]);
    }

    protected function create(array $data)
    {
        return (new UserService())->create($data);
    }

    public function showRegistrationForm()
    {
        $form = $this->form(RegisterForm::class, [
            'method' => 'POST',
            'url' => url('/register'),
        ]);

        return view('auth.register', compact('form'));
    }

    public function register(Request $request)
    {
        $this->validator($request->all())->validate();

        event(new Registered($this->create($request->all())));

        return redirect()->back();
    }

    public function confirm($token)
    {
        User::where('email_token', $token)->firstOrFail()->confirmed();

        return redirect('login')
            ->with('success', 'Email was successfully confirmed');
    }
}
