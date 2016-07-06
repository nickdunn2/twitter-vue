import Vuex from 'vuex';
import Vue from 'vue';
import _ from 'underscore';

Vue.use(Vuex);

export default new Vuex.Store({
  // Initial state
  state: {
    tweets: [],
    currentUser: {}
  },

  mutations: {
    RECEIVE_ALL_TWEETS: (state, tweets) => {
      state.tweets = tweets;
    },

    RECEIVE_CURRENT_USER: (state, user) => {
      state.currentUser = user;
    },

    ADD_TWEET: (state, newTweet) => {
      state.tweets.unshift(newTweet);
    },

    DELETE_TWEET: (state, deletedTweet) => {
      // Note: state.tweets.$remove(tweet) would work here if we were working with what's sent on the front-end
      // from Tweet.vue. But since we're instead working with the object returned from the DELETE request
      // in actions.js, we need to use the underscore method to find the object with that id and delete it.
      state.tweets = _.without(state.tweets, _.findWhere(state.tweets, { id: deletedTweet.id }));  
    },

    TOGGLE_LIKE: (state, tweet) => {
      var neededTweet = _.findWhere(state.tweets, {id: tweet.id});
      neededTweet.likes = tweet.likes;
    }
    
    // DECREMENT: ({ counters }, counterId) => {
    //   counters.$set(counterId, counters[counterId] - 1)
    // },
    // ADD_COUNTER: ({ counters }) => {
    //   counters.push(0)
    // }
  }
});