var services = angular.module('michelinServices', ['ngResource']);

// Resources Restaurant, Area, District, 
michelinServices.factory('Restaurant', ['$resource', 
  function($resource){
    return $resource('restaurants', {}, {
      query: { method: 'GET', isArray: true }
    });
  }]);