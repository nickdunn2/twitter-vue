<template>
  <li class="list-group-item">
    <h5 class="tweet-text"><strong>{{ tweet.user.name }}</strong></h5>
    <p>
        {{ tweet.tweet_content }} 
        <i v-show="currentUser.id == tweet.user_id" class="fa fa-trash" aria-hidden="true" @click="deleteTweet(tweet)"></i>
    </p>
    <p :class="{ liked: currentUserHasLiked }">
      <i  v-show="currentUserHasLiked" 
          class="fa fa-heart" 
          aria-hidden="true" 
          @click="toggleLike(tweet)">
      </i>
      <i  v-show="!currentUserHasLiked" 
          class="fa fa-heart-o" 
          aria-hidden="true" 
          @click="toggleLike(tweet)">
      </i>
       {{ likeCount }}
    </p>
  </li>
</template>

<script>
  import { deleteTweet, toggleLike } from '../vuex/actions';

  export default {
    props: ['tweet'],
    vuex: {
      getters: {
        currentUser: state => state.currentUser
      },

      actions: {
        deleteTweet,
        toggleLike
      }
    },
    computed: {
      likeCount: function() {
        return this.tweet.likes.length
      },

      currentUserHasLiked: function() {
        var currentUserId = this.currentUser.id;
        var likesArray = this.tweet.likes;
        for(var i = 0; i < likesArray.length; i++) {
          if (likesArray[i].id == currentUserId) {
            return true;
          }
        }
        return false;
      }
    }
  }
</script>
