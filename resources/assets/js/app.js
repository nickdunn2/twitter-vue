'use strict';

// THIS ISN'T BEING USED AT THE MOMENT. NEED BROWSERIFY OR WEBPACK OR WHATEVER TO BUNDLE IT.

Vue.component('tweets', {
    template: '#tweets-template',

    data: function() {
        return {
            newTweet: '',
            list: []
            // likes: 0 // put this in props? or this should maybe be where we start adding multiple components
                    // the tweets component will house or nest the individual tweet component
        };
    },

    ready: function() {
        this.fetchTweetList();
    },

    methods: {
        fetchTweetList: function() {
            this.$http.get('api/tweets').then(function(response) {
                var tweets = response.data
                this.list = tweets;
            }.bind(this), function(response) {
                console.log(response.status, response.statusText);
            });
        },

        addTweet: function() {
            var tweet_content = this.newTweet.trim();
            if (tweet_content) {
                this.$http.post('api/tweets', {tweet_content: tweet_content});
                this.fetchTweetList();
                this.newTweet = '';
            }
        },

        likeTweet: function(tweet) {
            console.log(tweet);
        },

        deleteTweet: function(tweet) {
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
            }, function() {
                this.$http.delete('api/tweets/'+tweet.id).then(function(response) {
                    this.list.$remove(tweet);
                    swal({
                        title: "Deleted!",
                        text: "Your tweet has been deleted.",
                        type: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }).error(function(error) {
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
