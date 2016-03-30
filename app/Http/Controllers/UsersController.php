<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Requests;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        if(auth()->user()->id !== $user->id) { // trying to property of non-object error
            return response()->json(['error' => 403, 'message' => 'This action is unauthorized.'], 403);
        }
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();
        return $user;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        if(auth()->user()->id !== $user->id) {
            return response()->json(['error' => 403, 'message' => 'This action is unauthorized.'], 403);
        }
        $user->delete();
        return $user;
    }
}
