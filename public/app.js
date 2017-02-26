var app = angular.module('bakpak', [
  'ngRoute',
  'bakpak.explore',
  'bakpak.search'])

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './public/home.html'
    })
    .when('/explore', {
      templateUrl: './public/temporary.html'
    })
    .when('/where', {
      templateUrl: './public/place.html'
    })
    .when('/reserve', {
      templateUrl: './public/temporary.html'
    })
    .when('/login', {
      templateUrl: './public/login.html'
    })
    .otherwise({
      redirectTo: '/',
    })
})
