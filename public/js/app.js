'use strict';

angular.module('myApp', ['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/brute-force', {
      templateUrl: 'partials/brute-force',
      controller: 'bruteForce',
      controllerAs: 'brute'
    }).
    when('/csrf', {
      templateUrl: 'partials/csrf'
    }).
    when('/time', {
      templateUrl: 'partials/time-consuming-task',
      controller: 'time',
      controllerAs: 'time'
    }).
    when('/redos', {
      templateUrl: 'partials/redos',
      controller: 'redos',
      controllerAs: 'redos'
    }).
    when('/ssji', {
      templateUrl: 'partials/ssji'
    }).
    when('/dor/:id', {
      templateUrl: 'partials/dor',
      controller: 'dor',
      controllerAs: 'dor'
    }).
    when('/main', {
      templateUrl: 'partials/home',
    }).
    otherwise({
      redirectTo: '/main'
    });

  $locationProvider.html5Mode(true);
});
