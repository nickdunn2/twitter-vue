@extends('layouts.app')

@section('content')
<div id="main" class="container">
    <div class="container fluid">
        <div class="input-group">
            <add-tweet></add-tweet>
        </div>
        <ul class="list-group">
            <tweet v-for="tweet in tweets" :tweet="tweet"></tweet>
        </ul>
    </div>
</div>

<template id="add-tweet-template">
    <input type="text" class="form-control" placeholder="What's happening?" v-model="newTweet" @keyup.enter="addTweet"/>
    <button type="button" class="btn btn-primary" v-show="newTweet" @click="addTweet"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Tweet</button>
</template>

<template id="tweet-template">
    <li class="list-group-item">
        <h5><strong>@{{ tweet.user.name }}</strong></h5>
        <p>
            @{{ tweet.tweet_content }}
            <i v-show="{{ Auth::user()->id }} == tweet.user_id" class="fa fa-trash" aria-hidden="true" @click="deleteTweet(tweet)"></i>
        </p>
        <p><i class="fa fa-heart" aria-hidden="true" @click="toggleLike(tweet)"></i> @{{ likes }}</p>
    </li>
</template>

<!-- <template id="tweets-template">
	<form @submit.prevent="addTweet">
		<input type="text" placeholder="What's happening?" v-model="newTweet"/>
		<button type="submit" v-show="newTweet"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Tweet</button>
	</form>
	
    <ul class="list-group">
        <li class="list-group-item" v-for="tweet in list">
            <h5><strong>@{{ tweet.user.name }}</strong></h5>
            <p>
                @{{ tweet.tweet_content }}
                <i v-show="{{ Auth::user()->id }} == tweet.user_id" class="fa fa-trash" aria-hidden="true" @click="deleteTweet(tweet)"></i>
            </p>
            <p><i class="fa fa-heart" aria-hidden="true" @click="toggleLike(tweet)"></i> @{{ tweet.likes.length }}</p>
        </li>
    </ul>
</template> -->
@endsection
