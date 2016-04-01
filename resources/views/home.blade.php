@extends('layouts.app')

@section('content')
<div id="main" class="container">
    <tweets></tweets>
</div>

<template id="tweets-template">
    <ul class="list-group">
        <li class="list-group-item" v-for="tweet in list">
            @{{ tweet.tweet_content }}
            <strong @click="deleteTweet(tweet)">X</strong>
        </li>
    </ul>
</template>
@endsection
