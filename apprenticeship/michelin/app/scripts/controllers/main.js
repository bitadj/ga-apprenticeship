'use strict';

angular.module('michelinApp')
  .controller('MainCtrl', [$scope, 'Restaurant'], function ($scope, Restaurant) {
    // var request = $http.get('http://localhost:3000/api/restaurants');
    // request.success(function (data) {
    //   $scope.restaurants = data.restaurants;

    $scope.restaurants = Restaurant.query();
    })
  });
