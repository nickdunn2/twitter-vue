@extends('layouts.app')

@section('content')
<div class="jumbotron header-jumbotron">
  <div class="container header-text">
    <h1 class="header-name">Twitter-Vue</h1>
    <p class="header-description">A simple, Twitter-like app using VueJS, Vuex and Laravel</p>
    <ul id="login-signup-list">
        <li><a class="btn btn-primary login-signup-button" href="{{ url('/register') }}" role="button">Sign Up</a></li>
        <li><a class="btn btn-primary login-signup-button" href="{{ url('/login') }}" role="button">Log In</a></li>
    </ul>
  </div> <!-- close container -->
</div> <!-- close jumbotron -->
@endsection
