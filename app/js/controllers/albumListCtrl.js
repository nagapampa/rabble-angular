'use strict';

/* AlbumListCtrl */

 angular.module('rabbleControllers').controller('AlbumListCtrl', ['$scope', 'Album',
  function($scope, Album) {
    console.log('going to album list');
    $scope.albums = Album.query();
    $scope.greeting = 'Album Listing page';

    $scope.getCachedAlbumImage = function(imgURL){
    	return 'https://mmscache.murfie.com/tc?src=' + encodeURIComponent(imgURL) + '&fmt=jpeg&auth=foo&scale_width=250';
    }


  }]);
