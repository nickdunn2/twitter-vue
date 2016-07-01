import Vue from 'vue';
Vue.use(require('vue-resource'));

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('content');

export const getCurrentUser = ({ dispatch }) => {
  Vue.http.get('api/users/currentuser').then(function(response) {
    dispatch('RECEIVE_CURRENT_USER', response.data);
  });
};

export const getAllTweets = ({ dispatch }) => {
  Vue.http.get('api/tweets').then(function(response) {
    dispatch('RECEIVE_ALL_TWEETS', response.data);
  });
};

export const addTweet = ({ dispatch }, tweet_content) => { 
  Vue.http.post('api/tweets', { tweet_content }).then(function(response) {
    const newTweet = response.data;
    dispatch('ADD_TWEET', newTweet);
  });
};

export const deleteTweet = ({ dispatch }, tweet) => { 
  swal({
    title: "Are you sure?",
    text: "You will not be able to recover this tweet!",
    type: "warning",
    showCancelButton: true,
    allowOutsideClick: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    closeOnConfirm: false,
    closeOnCancel: true 
  }, function() {
    Vue.http.delete('api/tweets/'+tweet.id).then(function(response) {
      const deletedTweet = response.data;
      dispatch('DELETE_TWEET', deletedTweet);
      swal({
          title: "Deleted!",
          text: "Your tweet has been deleted.",
          type: "success",
          showConfirmButton: false,
          timer: 1500
      });
    }).catch(function(error) {
      console.log(error);
      alert(error);
    });
  });
};
