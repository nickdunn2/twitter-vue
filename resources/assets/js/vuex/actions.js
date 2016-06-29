import Vue from 'vue';
Vue.use(require('vue-resource'));

export const getAllTweets = ({ dispatch }) => {
  Vue.http.get('api/tweets').then(function(response) {
    dispatch('RECEIVE_ALL_TWEETS', response.data);
  });
};

export const addTweet = ({ dispatch }) => { 
  dispatch('ADD_TWEET');
};

