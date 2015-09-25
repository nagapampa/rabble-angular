'use strict';

/* AlbumListCtrl */

 angular.module('rabbleControllers').controller('PosterListCtrl', ['$scope',
  function($scope) {
    console.log('going to poster list');
    $scope.greeting = 'Poster Listing page';
  }]);
