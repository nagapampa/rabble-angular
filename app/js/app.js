'use strict';

/* App Module */

var rabbleApp = angular.module('rabbleApp', [
  'ngRoute',
  'rabbleControllers',
  'rabbleServices'
]);

var rabbleControllers = angular.module('rabbleControllers', []);

var rabbleServices = angular.module('rabbleServices', ['ngResource']);

rabbleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/albums', {
        templateUrl: 'partials/album-list.html',
        controller: 'AlbumListCtrl'
      }).when('/artists', {
        templateUrl: 'partials/artist-list.html',
        controller: 'ArtistListCtrl'
      }).when('/posters', {
        templateUrl: 'partials/poster-list.html',
        controller: 'PosterListCtrl'
      }).
      otherwise({
        redirectTo: '/albums'
      });
  }]);

rabbleApp.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
