'use strict';

angular.module('michelinApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'michelinSercices'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
