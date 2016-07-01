<template>
  <li class="list-group-item">
    <h5><strong>{{ tweet.user.name }}</strong></h5>
    <p>
        {{ tweet.tweet_content }}
        <i v-show="currentUser.id == tweet.user_id" class="fa fa-trash" aria-hidden="true" @click="deleteTweet(tweet)"></i>
    </p>
    <!-- <p><i class="fa fa-heart" aria-hidden="true" @click="toggleLike(tweet)"></i> @{{ likes }}</p> -->
  </li>
</template>

<script>
  import { deleteTweet } from '../vuex/actions';

  export default {
    props: ['tweet'],
    vuex: {
      getters: {
        currentUser: state => state.currentUser
      },

      actions: {
        deleteTweet
      }
    },
  }
</script>
