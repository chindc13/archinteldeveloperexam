<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('API Token')->plainTextToken;

            return response()->json([
                    'token' => $token,
                    'user_id' => $user->id,
                    'type' => $user->type,
                    'name' => ucfirst($user->firstname).' '.ucfirst($user->lastname),
                    'login' => true
                ], 200);
        }

        return response()->json(['error' => 'Unauthorized', 'message' => 'Login failed'], 401);
    }

    public function logout(Request $request)    
    {
        $request->user()->tokens()->delete();

        return response()->json(['message' => 'Logged out'], 200);
    }
}
