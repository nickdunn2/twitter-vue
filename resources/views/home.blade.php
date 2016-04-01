@extends('layouts.app')

@section('content')
<div id="main" class="container">
    <tweets></tweets>
</div>

<template id="tweets-template">
    <ul class="list-group">
        <li class="list-group-item" v-for="tweet in list">
            @{{ tweet.tweet_content }}
        </li>
    </ul>
</template>
@endsection
