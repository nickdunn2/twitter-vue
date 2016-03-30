<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Get the tweets created by this user.
     */
    public function tweets() {
        return $this->hasMany('App\Tweet');
    }

    /**
     * Get the tweets the user has liked.
     */
    public function likes() {
        return $this->belongsToMany('App\Tweet')->withTimestamps();
    }
}
