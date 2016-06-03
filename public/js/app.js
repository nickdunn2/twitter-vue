'use strict';

Vue.component('tweets', {
    template: '#tweets-template',

    data: function() {
        return {
            newTweet: '',
            list: []
        };
    },

    created: function() {
        this.fetchTweetList();
    },

    methods: {
        fetchTweetList: function() {
            this.$http.get('api/tweets', function(tweets) {
                this.list = tweets;
            }.bind(this));
        },

        addTweet: function() {
            var tweet_content = this.newTweet.trim();
            if (tweet_content) {
                this.list.unshift({tweet_content: tweet_content});
                this.$http.post('api/tweets', {tweet_content: tweet_content});
                this.newTweet = '';
            }
        },

        deleteTweet: function(tweet) {
            var deletedTweetId = tweet.id;
            this.list.$remove(tweet);
            this.$http.delete('api/tweets/'+deletedTweetId);
        }
    }
});


Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('content');

new Vue({
   el: '#main'
});