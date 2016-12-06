<?php

namespace App\Http\Controllers\Api\Auth;

use App\Entities\User;
use App\Http\Controllers\Api\ApiController;
use App\Http\Requests\AuthLoginRequest;
use App\Http\Requests\AuthRegisterRequest;
use App\Http\Transformers\UserTransformer;
use PDOException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends ApiController
{
    public function __construct()
    {
        $this->middleware('guest', ['except' => ['user']]);
    }

    public function login(AuthLoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return $this->response->errorUnauthorized();
            }

            $user = JWTAuth::toUser($token);

            return $this->response
                ->item($user, new UserTransformer())
                ->addMeta('token', $token);
        } catch (JWTException $e) {
            return $this->response->errorInternal();
        }
    }

    public function register(AuthRegisterRequest $request)
    {
        try {
            User::create([
                'name' => $request->get('name'),
                'email' => $request->get('email'),
                'password' => bcrypt($request->get('password')),
            ]);
        } catch (PDOException $e) {
            return $this->response->errorInternal('Something was wrong');
        }

        return $this->api->raw()->post('login', [
            'email' => $request->get('email'),
            'password' => $request->get('password'),
        ]);
    }

    public function user()
    {
        return $this->response
            ->item($this->auth->user(), new UserTransformer());
    }
}
