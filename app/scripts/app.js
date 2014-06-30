'use strict';

angular
  .module('katNftApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase',
    'angularfire.firebase',
    'angularfire.login',
    'simpleLoginTools'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/history', {
        templateUrl: 'views/historicalsites.html',
        // controller: 'PostsCtrl'
      })
      .when('/beaches', {
        templateUrl: 'views/beaches.html',
        // controller: 'beachesCtrl'
      })
      .when('/edisto', {
        templateUrl: 'views/edisto.html',
        // controller: 'PostCtrl'
      })
      .when('/lowcountryislands', {
        templateUrl: 'views/lowcountryislands.html',
        // controller: 'PostCtrl'
      })
      .when('/localshangout', {
        templateUrl: 'views/localshangout.html',
        controller: 'BlogCtrl'
      })
      .when('/neighborhoods', {
        templateUrl: 'views/neighborhoods.html',
        // controller: 'OrdersCtrl'
      })
      .when('/nightlife', {
        templateUrl: 'views/nightlife.html',
        // controller: 'SummaryCtrl'
      })
      .when('/parksandplaces', {
        templateUrl: 'views/parksandplaces.html',
        // controller: 'OrdersCtrl'
      })
      .when('/sports', {
        templateUrl: 'views/sports.html',
        // controller: 'OrdersCtrl'
      })
      .when('/transit', {
        templateUrl: 'views/transit.html',
        // controller: 'OrdersCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
