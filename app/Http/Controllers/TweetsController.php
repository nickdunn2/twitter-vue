<?php

namespace App\Http\Controllers;

use App\Tweet;
use App\Http\Requests;
use Illuminate\Http\Request;

class TweetsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Tweet::all();
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
        return $tweet;
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

        $post = Post::findOrFail($id);
        $this->authorize('update-destroy', $post);
        $post->user_id = auth()->user()->id;
        $post->post_content = $request->post_content;
        $post->save();
        return $post;
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
}
