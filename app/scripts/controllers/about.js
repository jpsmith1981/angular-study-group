'use strict';

/**
 * @ngdoc function
 * @name angularMeetupApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularMeetupApp
 */
angular.module('angularMeetupApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
