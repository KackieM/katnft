'use strict';

var katNftApp = angular.module('katNftApp', []);

  katNftApp.controller('EssentialsCrtl', ['$scope', function($scope) {
    $scope.essentials = 'essentials';

    $scope.ATMsEssentials = function() {
    	$scope.essentials = 'ATMs';
    };

    $scope.SupermarketsEssentials = function() {
    	$scope.essentials = 'Supermarkets';
    };

    $scope.HardwareStoreEssentials = function() {
    	$scope.essentials = 'HardwareStore';
    };

    $scope.HospitalsEssentials = function() {
    	$scope.essentials = 'Hospitals';
    };

    $scope.TransportationEssentials = function() {
    	$scope.essentials = 'Transportation';
    };

    $scope.SchoolsEssentials = function() {
    	$scope.essentials = 'Schools';
    };

  
    }]);
  });
