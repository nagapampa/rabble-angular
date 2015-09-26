'use strict';

/* posterServices */

angular.module('rabbleServices').factory('Poster', ['$resource',
  function($resource){
    return $resource('http://localhost:5000/public/posters/:id');
  }]);