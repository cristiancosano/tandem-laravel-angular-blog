<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\LogoutRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;

class AuthController extends Controller
{
    /**
     * Get token of identified user.
     *
     * @param  LoginRequest  $request
     * @return Response
     */
    public function login(LoginRequest $request): Response
    {
        $authenticated = Auth::attempt([
            'email'     => $request->get('email'),
            'password'  => $request->get('password')
        ]);

        if($authenticated)
        {
            $token = $request->user()->createToken($request->get('device'));
            return response(['token' => $token->plainTextToken]);
        }
        else
        {
            return response(['message' => 'Invalid credentials'], 401);
        }
    }

    /**
     * Delete token of identified user.
     *
     * @param  Request  $request
     * @return Response
     */
    public function logout(Request $request): Response{
        $message = ['status' => 'Failed to delete token'];
        if($request->user()->currentAccessToken()->delete())
        {
            $message['status'] = 'Success';
        }
        return response($message);
    }
}
