<template>
  <div id="app" class="container login-signup-form">
    <div class="container fluid">
      <tweet-list></tweet-list>
    </div>
  </div>
</template>

<script>
  import TweetList from './TweetList.vue';

  export default {
    components: {
      TweetList
    }
  }
</script>