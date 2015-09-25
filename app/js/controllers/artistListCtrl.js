'use strict';

/* ArtistListCtrl */

 angular.module('rabbleControllers').controller('ArtistListCtrl', ['$scope',
  function($scope) {
    console.log('going to artist list');
    $scope.greeting = 'Artist Listing page';
  }]);