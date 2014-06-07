'use strict';

angular
  .module('katnftApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/englishman', {
        templateUrl: 'views/englishman.html',
        // controller: 'PostsCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'PostsCtrl'
      })
      .when('/blog/:id', {
        templateUrl: 'views/blog-detail.html',
        controller: 'PostCtrl'
      })
      .when('/blog/:id/edit', {
        templateUrl: 'views/blog-editDetail.html',
        controller: 'PostCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .when('/productsDetail', {
        templateUrl: 'views/productsDetail.html',
        controller: 'ProductsCtrl'
      })
      .when('/orderCreate', {
        templateUrl: 'views/orderCreate.html',
        controller: 'OrdersCtrl'
      })
      .when('/summaryOrder', {
        templateUrl: 'views/orderSummary.html',
        controller: 'SummaryCtrl'
      })
      .when('/orderSummaryEdit', {
        templateUrl: 'views/orderSummaryEdit.html',
        controller: 'OrdersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
