<template>
  <div id="app" class="container">
    <div class="container fluid">
      <add-tweet></add-tweet>
      <tweet-list></tweet-list>
    </div>
  </div>
</template>

<script>
  import AddTweet from './AddTweet.vue';
  import TweetList from './TweetList.vue';

  export default {
    components: {
      AddTweet,
      TweetList
    }
  }
</script>