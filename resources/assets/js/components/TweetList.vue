<template>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="What's happening?" @keyup.enter="tryAddTweet"/>
    <!-- <button type="button" class="btn btn-primary" @click="tryAddTweet"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Tweet</button> -->
    <!-- add v-show="newTweet" later to the button, and v-model="newTweet" to the input
      although there is something tricky you have to do in Vuex with form inputs (no v-model)
    -->
  </div>
  <ul class="list-group">
    <tweet v-for="tweet in tweets" track-by="id" :tweet="tweet"></tweet>
  </ul>
</template>



<script>
  import Tweet from './Tweet.vue';
  import { addTweet } from '../vuex/actions';

  export default {
    components: { Tweet },
    vuex: {
      actions: { addTweet },
      getters: {
        tweets: state => state.tweets
      }
    },

    methods: {
      tryAddTweet (e) {
        const tweet_content = e.target.value
        if (tweet_content.trim()) {
          this.addTweet(tweet_content)
          e.target.value = ''
        }
      }
    }
  };
</script>
