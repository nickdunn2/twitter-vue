'use strict';

Vue.component('tweets', {
    template: '#tweets-template',

    data: function() {
        return {
            newTweet: '',
            list: []
        };
    },

    ready: function() {
        this.fetchTweetList();
    },

    methods: {
        fetchTweetList: function() {
            // this should implement .then(function(tweets)), but for now it's throwing an error
            // Error when evaluating expression "tweet.user.name": TypeError: Cannot read property 'name' of undefined (found in component: <tweets>)
            // Probably because stuff on home.blade.php is trying to load before the tweets have been fetched
            this.$http.get('api/tweets', function(tweets) {
                this.list = tweets;
            }.bind(this));
        },

        addTweet: function() {
            var tweet_content = this.newTweet.trim();
            if (tweet_content) {
                this.$http.post('api/tweets', {tweet_content: tweet_content});
                this.fetchTweetList();
                this.newTweet = '';
            }
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
