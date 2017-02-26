angular.module('bakpak.search', []) 

.controller('searchBar', function($scope, $http){

  const input = document.getElementById('input');
  $scope.input = new google.maps.places.SearchBox(input);
  $scope.city;
});