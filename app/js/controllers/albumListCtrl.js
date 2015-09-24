'use strict';

/* AlbumListCtrl */

var rabbleControllers = angular.module('rabbleControllers');

rabbleControllers.controller('AlbumListCtrl', ['$scope',
  function($scope) {
    console.log('going to album list');
    $scope.greeting = 'Album Listing page';
  }]);
