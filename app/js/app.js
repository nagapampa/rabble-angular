'use strict';

/* App Module */

var rabbleApp = angular.module('rabbleApp', [
  'ngRoute',
  'rabbleControllers'
]);

var rabbleControllers = angular.module('rabbleControllers', []);

rabbleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/album', {
        templateUrl: 'partials/album-list.html',
        controller: 'AlbumListCtrl'
      }).
      otherwise({
        redirectTo: '/album'
      });
  }]);
