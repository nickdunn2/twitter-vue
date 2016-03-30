<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tweet extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'tweet_content'
    ];

    /**
     * Get the user who created the tweet.
     */
    public function user() {
        return $this->belongsTo('App\User');
    }

    /**
     * Get the users who have liked the tweet.
     */
    public function likes() {
        return $this->belongsToMany('App\User')->withTimestamps();
    }
}
