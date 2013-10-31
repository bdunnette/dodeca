'use strict';

angular.module('dodecaApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'restangular'
])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/collection/:collectionId', {
        templateUrl: 'views/collection.html',
        controller: 'CollectionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });
