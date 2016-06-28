(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Vue.component('tweets', {
    template: '#tweets-template',

    data: function data() {
        return {
            newTweet: '',
            list: [],
            likes: 0 // put this in props? or this should maybe be where we start adding multiple components
            // the tweets component will house or nest the individual tweet component
        };
    },

    ready: function ready() {
        this.fetchTweetList();
    },

    methods: {
        fetchTweetList: function fetchTweetList() {
            this.$http.get('api/tweets').then(function (response) {
                var tweets = response.data;
                this.list = tweets;
            }.bind(this), function (response) {
                console.log(response.status, response.statusText);
            });
        },

        addTweet: function addTweet() {
            var tweet_content = this.newTweet.trim();
            if (tweet_content) {
                this.$http.post('api/tweets', { tweet_content: tweet_content });
                this.fetchTweetList();
                this.newTweet = '';
            }
        },

        deleteTweet: function deleteTweet(tweet) {
            swal({
                title: "Are you sure?",
                text: "You will not be able to recover this tweet!",
                type: "warning",
                showCancelButton: true,
                allowOutsideClick: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function () {
                this.$http.delete('api/tweets/' + tweet.id).then(function (response) {
                    this.list.$remove(tweet);
                    swal({
                        title: "Deleted!",
                        text: "Your tweet has been deleted.",
                        type: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }).error(function (error) {
                    console.log(error);
                    alert(error);
                });
            }.bind(this));
        }
    }
});

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('content');

new Vue({
    el: '#main'
});

},{}]},{},[1]);

//# sourceMappingURL=app.js.map
