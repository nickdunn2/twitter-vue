<template>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="What's happening?" @keyup.enter="tryAddTweet"/>
    <!-- <button type="submit" class="btn btn-primary" @click="addTweet"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Tweet</button> -->
  </div>
</template>

<!-- add v-show="newTweet" later to the button, and v-model="newTweet" to the input
      although there is something tricky you have to do in Vuex with form inputs (no v-model)
 -->

<script>
  import { getAllTweets, addTweet } from '../vuex/actions';

  export default {
    vuex: {
      actions: { getAllTweets, addTweet }      
    },

    methods: {
      tryAddTweet (e) {
        const tweet_content = e.target.value
        if (tweet_content.trim()) {
          this.addTweet(tweet_content)
          e.target.value = ''
          this.getAllTweets();
        }
      }
    }

    
    // maybe also a ready() hook here?
  }
</script>