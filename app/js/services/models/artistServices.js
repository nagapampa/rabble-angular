'use strict';

/* artistService */

angular.module('rabbleServices').factory('Artist', ['$resource',
  function($resource){
    return $resource('http://localhost:5000/public/artists/:id');
  }]);