var app = angular.module('bakpak', [
  'ngRoute',
  'bakpak.explore'])

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './public/home.html'
    })
    .when('/explore', {
      templateUrl: './public/explore.html'
    })
    .when('/where', {
      templateUrl: './public/place.html'
    })
    .when('/reserve', {
      templateUrl: './public/reserve.html'
    })
    .when('/login', {
      templateUrl: './public/login.html'
    })
    .otherwise({
      redirectTo: '/',
    })
})
