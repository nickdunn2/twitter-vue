import Vue from 'vue';
Vue.use(require('vue-resource'));

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('content');

export const getAllTweets = ({ dispatch }) => {
  Vue.http.get('api/tweets').then(function(response) {
    dispatch('RECEIVE_ALL_TWEETS', response.data);
  });
};

export const addTweet = ({ dispatch }, tweet_content) => { 
  Vue.http.post('api/tweets', { tweet_content });
};

