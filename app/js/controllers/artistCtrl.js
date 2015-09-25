'use strict';

/* ArtistCtrl */

 angular.module('rabbleControllers').controller('ArtistCtrl', ['$scope',
  function($scope) {
    console.log('going to artist list');
    $scope.greeting = 'Artist Listing page';
  }]);