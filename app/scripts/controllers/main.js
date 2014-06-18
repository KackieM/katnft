'use strict';

// var katNftApp = angular.module('katNftApp', []);

angular.module('katNftApp')
    .controller('KatCtrl', function($scope, CharlestonCityPaperFeed) {
        $scope.feed = CharlestonCityPaperFeed.get();
    })
    .controller('MainCrtl', function($scope, $http) {
        var url = ""
    }

  




  // katNftApp.controller('beachesCtrl', ['$scope', function($scope) {
  //   $scope.essentials = 'essentials';

  //   $scope.ATMsEssentials = function() {
  //   	$scope.essentials = 'ATMs';
  //   };

  //   $scope.SupermarketsEssentials = function() {
  //   	$scope.essentials = 'Supermarkets';
  //   };

  //   $scope.HardwareStoreEssentials = function() {
  //   	$scope.essentials = 'HardwareStore';
  //   };

  //   $scope.HospitalsEssentials = function() {
  //   	$scope.essentials = 'Hospitals';
  //   };

  //   $scope.TransportationEssentials = function() {
  //   	$scope.essentials = 'Transportation';
  //   };

  //   $scope.SchoolsEssentials = function() {
  //   	$scope.essentials = 'Schools';
  //   };

  

  );
