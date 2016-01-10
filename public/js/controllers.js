'use strict';

/* Controllers */

angular.module('myApp').
  controller('bruteForce', function ($scope, $http) {
    $scope.result = [];
    $scope.attack = function () {
      $http({
        method: 'POST',
        url: '/api/brute-force'
      }).
      success(function (data, status, headers, config) {
        $scope.result.unshift(data.data);
      }).
      error(function (data, status, headers, config) {
        $scope.result.unshift(status + ' Too Many Requests');
      });
    }

  }).
  controller('time', function ($scope, $http) {
    $scope.submit = function () {
      $http({
        method: 'POST',
        url: '/api/time',
        data: {num: $scope.num}
      }).
      success(function (data, status, headers, config) {
        $scope.data = data.time;
      }).
      error(function (data, status, headers, config) {
        $scope.data = "Error";
      });
    }
  }).
  controller('dor', function ($scope, $routeParams) {
    var id = $routeParams.id;
    accounts.forEach(function(element, index){
        if (element.id == id)
          $scope.acc = element;
    });
  }).
  controller('redos', function ($scope, $http) {
    $scope.done = false;
    $scope.submit = function () {
      $http({
        method: 'POST',
        url: '/api/redosTime',
        data: {text: $scope.text}
      }).
      success(function (data, status, headers, config) {
        $scope.data = data.time;
        $scope.valid = data.valid;
        $scope.done = true;
      }).
      error(function (data, status, headers, config) {
        $scope.data = "Error";
      });
    }
  });
