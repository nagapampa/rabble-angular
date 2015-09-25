'use strict';

/* albumServices */

angular.module('rabbleServices').factory('Album', ['$resource',
  function($resource){
    return $resource('http://localhost:5000/public/albums/', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
 }]);