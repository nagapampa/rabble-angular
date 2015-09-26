'use strict';

/* PosterCtrl */

 angular.module('rabbleControllers').controller('PosterCtrl', ['$scope', 'Poster', '$routeParams',
  function($scope, Poster, $routeParams) {

    $scope.posters = Poster.query();

    $scope.getCachedPosterImage = function(imgURL){
    	return 'https://mmscache.murfie.com/tc?src=' + encodeURIComponent(imgURL) + '&fmt=jpeg&auth=foo&scale_width=400';
    }


  }]);

 angular.module('rabbleControllers').controller('PosterDetailCtrl', ['$scope', 'Poster', '$routeParams',
  function($scope, Poster, $routeParams) {

  $scope.poster = Poster.get({id: $routeParams.id}, function(poster) {
		$scope.poster = poster.poster;
  });

  $scope.getCachedPosterImage = function(imgURL){
    return 'https://mmscache.murfie.com/tc?src=' + encodeURIComponent(imgURL) + '&fmt=jpeg&auth=foo&scale_width=400';
  }


  }]);
