'use strict';

/* AlbumCtrl */

 angular.module('rabbleControllers').controller('AlbumCtrl', ['$scope', 'Album', '$routeParams',
  function($scope, Album, $routeParams) {

    $scope.albums = Album.query();

    $scope.getCachedAlbumImage = function(imgURL){
    	return 'https://mmscache.murfie.com/tc?src=' + encodeURIComponent(imgURL) + '&fmt=jpeg&auth=foo&scale_width=400';
    }


  }]);

 angular.module('rabbleControllers').controller('AlbumDetailCtrl', ['$scope', 'Album', '$routeParams',
  function($scope, Album, $routeParams) {

	$scope.album = Album.get({id: $routeParams.id}, function(album) {
		$scope.album = album.album;
    });

    $scope.getCachedAlbumImage = function(imgURL){
    	return 'https://mmscache.murfie.com/tc?src=' + encodeURIComponent(imgURL) + '&fmt=jpeg&auth=foo&scale_width=400';
    }


  }]);
