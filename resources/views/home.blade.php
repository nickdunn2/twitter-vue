@extends('layouts.app')

@section('content')
<div id="main" class="container">
    <tweets></tweets>
</div>

<template id="tweets-template">
	<form @submit.prevent="addTweet">
		<input type="text" placeholder="What's happening?" v-model="newTweet"/>
		<button type="submit" v-show="newTweet"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Tweet</button>
	</form>
	
    <ul class="list-group">
        <li class="list-group-item" v-for="tweet in list">
            <strong>@{{ tweet.user.name }}</strong><br/>
            @{{ tweet.tweet_content }}
            <i v-show="{{ Auth::user()->id }} == tweet.user_id" class="fa fa-trash" aria-hidden="true" @click="deleteTweet(tweet)"></i>
        </li>
    </ul>
</template>
@endsection
