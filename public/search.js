angular.module('bakpak.search', []) 

.controller('searchBar', function($scope, $http){

  const options = {
  types: ['(cities)'],
  componentRestrictions: {country: "us"}
  };
  const input = document.getElementById('input');
  $scope.input = new google.maps.places.Autocomplete(input, options);
  $scope.city;
});