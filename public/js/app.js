'use strict';

Vue.component('tweets', {
    template: '#tweets-template',

    data: function() {
        return {
            list: []
        };
    },

    created: function() {
        $.getJSON('api/tweets', function(tweets) {
            this.list = tweets;
        }.bind(this));
    }
});

new Vue({
   el: '#main'
});