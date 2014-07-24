var app = angular.module('katNftApp', ['ngMap']);
  app.controller('islandCtrl', function($scope, $http, $interval) {
    $scope.markersData = markers; // markers data from markers.json
    $scope.markerClicked = function() { 
      alert('this is marker at '+ this.getPosition());
    }
  });
  