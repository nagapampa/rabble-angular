'use strict';

/* NavigationCtrl */

 angular.module('rabbleControllers').controller('NavigationCtrl', ['$scope', '$location',
  function($scope, $location) {
  	
    $scope.isActive = function(route) {
        return route === $location.path();
    }

  }]);
