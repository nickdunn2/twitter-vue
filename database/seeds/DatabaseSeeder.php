<?php

use App\User;
use App\Tweet;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        Tweet::truncate();
        DB::table('tweet_user')->truncate();
        factory(User::class, 50)->create()->each(function($user) {
            $tweets = factory(Tweet::class, rand(2,4))->make();
            $user->tweets()->saveMany($tweets);

            $tweetIds = $tweets->pluck('id')->toArray();
            $user->likes()->sync($tweetIds);
        });
    }
}
