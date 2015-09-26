'use strict';

/* MainCtrl */

 angular.module('rabbleControllers').controller('MainCtrl', ['$scope',
  function($scope) {

  	$scope.showPlayer = false;
  	$scope.togglePlayer = function(){
  		if($scope.showPlayer)
  			$scope.showPlayer = false;
  		else
  			$scope.showPlayer = true;
  	};

  }]);