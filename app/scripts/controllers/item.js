'use strict';

angular.module('dodecaApp')
  .controller('ItemCtrl', function ($scope, $routeParams, Restangular) {
    $scope.itemId = $routeParams.itemId;
    Restangular.oneUrl('item', 'http://archive.pathology.umn.edu/api/items/' + $scope.itemId).get().then(function (item) {
      $scope.item = item;
    });
    Restangular.allUrl('files', 'http://archive.pathology.umn.edu/api/files?item=' + $scope.itemId).getList().then(function (files) {
        $scope.files = files;
      });
  });
