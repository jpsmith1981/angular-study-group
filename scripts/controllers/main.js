'use strict';

/**
 * @ngdoc function
 * @name footballApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the footballApp
 */
angular.module('footballApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
