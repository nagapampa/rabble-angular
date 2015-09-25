'use strict';

/* ArtistCtrl */

 angular.module('rabbleControllers').controller('ArtistCtrl', ['$scope', 'Artist', '$routeParams',
  function($scope, Artist, $routeParams) {

    $scope.artists = Artist.query();

    $scope.getCachedArtistImage = function(imgURL){
    	return 'https://mmscache.murfie.com/tc?src=' + encodeURIComponent(imgURL) + '&fmt=jpeg&auth=foo&scale_width=400';
    }


  }]);

 angular.module('rabbleControllers').controller('ArtistDetailCtrl', ['$scope', 'Artist', '$routeParams',
  function($scope, Artist, $routeParams) {

  $scope.artist = Artist.get({id: $routeParams.id}, function(artist) {
		$scope.artist = artist.artist;
  });

  $scope.getCachedArtistImage = function(imgURL){
    return 'https://mmscache.murfie.com/tc?src=' + encodeURIComponent(imgURL) + '&fmt=jpeg&auth=foo&scale_width=400';
  }


  }]);
