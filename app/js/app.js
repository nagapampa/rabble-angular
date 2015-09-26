'use strict';

/* App Module */

var rabbleApp = angular.module('rabbleApp', [
  'ngRoute',
  'rabbleControllers',
  'rabbleServices',
  'angularSoundManager'
]);

var rabbleControllers = angular.module('rabbleControllers', []);

var rabbleServices = angular.module('rabbleServices', ['ngResource']);

rabbleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/albums', {
        templateUrl: 'partials/album-list.html',
        controller: 'AlbumCtrl'
      }).when('/albums/:id', {
        templateUrl: 'partials/album-detail.html',
        controller: 'AlbumDetailCtrl'
      }).when('/artists', {
        templateUrl: 'partials/artist-list.html',
        controller: 'ArtistCtrl'
      }).when('/artists/:id', {
        templateUrl: 'partials/artist-detail.html',
        controller: 'ArtistDetailCtrl'
      }).when('/posters', {
        templateUrl: 'partials/poster-list.html',
        controller: 'PosterCtrl'
      }).when('/posters/:id', {
        templateUrl: 'partials/poster-detail.html',
        controller: 'PosterDetailCtrl'
      }).when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).when('/faq', {
        templateUrl: 'partials/faq.html'
      }).when('/about', {
        templateUrl: 'partials/about.html'
      }).
      otherwise({
        redirectTo: '/albums'
      });
  }]);

rabbleApp.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
