<template>
  <ul class="list-group">
    <tweet v-for="tweet in tweets" track-by="id" :tweet="tweet"></tweet>
  </ul>
</template>

<script>
  import Tweet from './Tweet.vue';

  export default {
    components: { Tweet },
    vuex: {
      getters: {
        tweets: state => state.tweets
      }
    },
  };
</script>
