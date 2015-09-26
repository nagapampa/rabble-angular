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
    // put all the tracks in a 'song' array
    var arrSongs = [];
    angular.forEach($scope.album.tracks, function(track) {
      var song = {id:track.position, title: track.title, artist:$scope.album.main_artist_name, url: track.url, duration:track.duration};
      arrSongs.push(song);
    });
    $scope.songs = arrSongs;
  });

  $scope.getCachedAlbumImage = function(imgURL){
    return 'https://mmscache.murfie.com/tc?src=' + encodeURIComponent(imgURL) + '&fmt=jpeg&auth=foo&scale_width=400';
  }


  }]);
