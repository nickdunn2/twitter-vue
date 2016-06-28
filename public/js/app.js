'use strict';

Vue.component('tweet', {
  template: '#tweet-template',

  props: ['tweet'],

  data: function() {
    return {
      liked: false,
    }
  },

  methods: {
    toggleLike: function(tweet) {
      if(this.liked) {
        this.unlikeTweet(tweet);
      } else {
        this.likeTweet(tweet);
      }
    },

    likeTweet: function(tweet) {
      console.log("liking tweet");
      this.liked = true;
    },

    unlikeTweet: function(tweet) {
      console.log("unliking tweet");
      this.liked = false;
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
              this.$parent.tweets.$remove(tweet);
              swal({
                  title: "Deleted!",
                  text: "Your tweet has been deleted.",
                  type: "success",
                  showConfirmButton: false,
                  timer: 1500
              });
          }).catch(function(error) {
              console.log(error);
              alert(error);
          });
      }.bind(this));
    }
  },

  computed: {
    likes: function() {
      if(this.liked) {
        return this.tweet.likes.length + 1;
      } else {
        return this.tweet.likes.length
      }
    }
  }
});

Vue.component('add-tweet', {
  template: '#add-tweet-template',

  data: function() {
    return {
      newTweet: ''
    }
  },

  methods: {
    addTweet: function() {
      var tweet_content = this.newTweet.trim();
      if (tweet_content) {
          this.$http.post('api/tweets', {tweet_content: tweet_content});
          this.$parent.fetchTweetList();
          this.newTweet = '';        
      }
    }
  }
});

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('content');

new Vue({
   el: '#main',

   data: function() {
    return {
      tweets: []
    }
   },

   ready: function() {
    this.fetchTweetList();
   },

   methods: {
    fetchTweetList: function() {
      this.$http.get('api/tweets').then(function(response) {
        this.tweets = response.data;
      }.bind(this), function(response) {
        console.log(response.status, response.statusText);
      });
    }
   }
});
