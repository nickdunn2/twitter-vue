<template>
  <li class="list-group-item">
    <h5><strong>{{ tweet.user.name }}</strong></h5>
    <p>
        {{ tweet.tweet_content }}
    </p>
  </li>
</template>

<script>
  // import anything needed in future

  export default {
    props: ['tweet']
  }
</script>