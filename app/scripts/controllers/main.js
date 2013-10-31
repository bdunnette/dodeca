'use strict';

angular.module('dodecaApp')
  .controller('MainCtrl', function ($scope, Restangular) {
    Restangular.allUrl('collections', 'http://archive.pathology.umn.edu/api/collections').getList().then(function (collections) {
      $scope.collections = collections;
    });
  });
