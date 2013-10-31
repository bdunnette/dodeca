'use strict';

angular.module('dodecaApp')
  .controller('CollectionCtrl', function ($scope, $routeParams, Restangular) {
    $scope.collectionId = $routeParams.collectionId;
    Restangular.allUrl('items', 'http://archive.pathology.umn.edu/api/items?collection=' + $scope.collectionId).getList().then(function (items) {
      $scope.items = items;
    });
  });
