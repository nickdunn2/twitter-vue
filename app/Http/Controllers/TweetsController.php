<?php

namespace App\Http\Controllers;

use App\Tweet;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TweetsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Tweet::with('user', 'likes')->latest()->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $tweet = new Tweet;
        $tweet->user_id = auth()->user()->id;
        $tweet->tweet_content = $request->tweet_content;
        $tweet->save();
        return $tweet->with('user', 'likes')->latest()->first();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Tweet::findOrFail($id);
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
        $tweet = Tweet::findOrFail($id);
        $this->authorize('update-destroy', $tweet);
        $tweet->user_id = auth()->user()->id;
        $tweet->tweet_content = $request->tweet_content;
        $tweet->save();
        return $tweet;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tweet = Tweet::findOrFail($id);
        $this->authorize('update-destroy', $tweet);
        $tweet->delete();
        return $tweet;
    }

    /**
     * Allow the current user to like a tweet.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function like($id)
    {
        $tweet = Tweet::findOrFail($id);
        $tweet->likes()->attach(auth()->user()->id);
        return $tweet;
    }

    /**
     * Allow the current user to unlike a tweet.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function unlike($id)
    {
        $tweet = Tweet::findOrFail($id);
        $tweet->likes()->detach(auth()->user()->id);
        return $tweet;
    }
}
