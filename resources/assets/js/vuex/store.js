import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  // Initial state
  state: {
    tweets: []
  },

  mutations: {
    RECEIVE_ALL_TWEETS: (state, tweets) => {
      state.tweets = tweets;
    }
    // DECREMENT: ({ counters }, counterId) => {
    //   counters.$set(counterId, counters[counterId] - 1)
    // },
    // ADD_COUNTER: ({ counters }) => {
    //   counters.push(0)
    // }
  }
});