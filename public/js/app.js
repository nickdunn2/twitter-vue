'use strict';

Vue.component('tweets', {
    template: '#tweets-template',

    data: function() {
        return {
            list: []
        };
    },

    created: function() {
        this.fetchTweetList();
    },

    methods: {
        fetchTweetList: function() {
            $.getJSON('api/tweets', function(tweets) {
                this.list = tweets;
            }.bind(this));
        },

        deleteTweet: function(tweet) {
            this.list.$remove(tweet);
        }
    }
});

new Vue({
   el: '#main'
});