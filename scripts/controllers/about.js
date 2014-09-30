'use strict';

/**
 * @ngdoc function
 * @name footballApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the footballApp
 */
angular.module('footballApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
