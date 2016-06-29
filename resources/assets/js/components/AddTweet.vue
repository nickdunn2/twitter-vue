<template>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="What's happening?" @keyup.enter="addTweet"/>
    <button type="button" class="btn btn-primary" @click="addTweet"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Tweet</button>
  </div>
</template>

<!-- add v-show="newTweet" later to the button, and v-model="newTweet" to the input
      although there is something tricky you have to do in Vuex with form inputs (no v-model)
 -->

<script>
  import Vue from 'vue';
  Vue.use(require('vue-resource'));
  import { addTweet } from '../vuex/actions';

  export default {
    vuex: {
      actions: { addTweet },
      getters: {
        // need to access state here
        // something like...
        // data: state => state.data
        // which is the ES6 syntax for...
        // data: function(state) {
          // return state.data;
        // }
      }
    },

    // maybe also a ready() hook here?
  }
</script>