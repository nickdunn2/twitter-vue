import Vue from 'vue';
import store from './vuex/store';
import App from './components/App.vue';
import { getAllTweets, getCurrentUser } from './vuex/actions'

new Vue({
  store,
  el: 'body',
  components: {
    App
  }
});

getAllTweets(store);
getCurrentUser(store);
