@extends('layouts.app')

@section('content')
<div id="main" class="container">
    <tweets></tweets>
</div>

<template id="tweets-template">
	<input type="text" placeholder="What's happening?" v-model="newTweet" v-on:keyup.enter="addTweet"/>
    <ul class="list-group">
        <li class="list-group-item" v-for="tweet in list">
            @{{ tweet.tweet_content }}
            <i class="fa fa-trash" aria-hidden="true" @click="deleteTweet(tweet)"></i>
        </li>
    </ul>
</template>
@endsection
