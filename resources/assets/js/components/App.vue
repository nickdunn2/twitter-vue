<template>
  <div id="app" class="container">
    <div class="container fluid">
      <tweet-list></tweet-list>
    </div>
  </div>
</template>

<script>
  // import AddTweet from './AddTweet.vue';
  import TweetList from './TweetList.vue';

  export default {
    components: {
      TweetList
    }
  }
</script>