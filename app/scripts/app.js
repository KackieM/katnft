'use strict';

angular
  .module('katnftApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        // controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        // controller: 'PostsCtrl'
      })
      .when('/arts', {
        templateUrl: 'views/arts.html',
        controller: 'PostsCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'PostCtrl'
      })
      .when('/englishman', {
        templateUrl: 'views/englishman.html',
        controller: 'PostCtrl'
      })
      .when('/landmarks', {
        templateUrl: 'views/landmarks.html',
        controller: 'ProductsCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'ProductsCtrl'
      })
      .when('/neighborhoods', {
        templateUrl: 'views/neighborhoods.html',
        controller: 'OrdersCtrl'
      })
      .when('/nightlife', {
        templateUrl: 'views/nightlife.html',
        controller: 'SummaryCtrl'
      })
      .when('/parksandplaces', {
        templateUrl: 'views/parksandplaces.html',
        controller: 'OrdersCtrl'
      })
      .when('/sports', {
        templateUrl: 'views/sports.html',
        controller: 'OrdersCtrl'
      })
      .when('/transit', {
        templateUrl: 'views/transit.html',
        controller: 'OrdersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
