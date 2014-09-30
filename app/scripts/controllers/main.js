'use strict';

/**
 * @ngdoc function
 * @name angularMeetupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMeetupApp
 */
angular.module('angularMeetupApp')
  .controller('MainCtrl', function ($scope, NFLdata) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    NFLdata.get().success(function(data){
        $scope.home = data['2014090801'].home;
        $scope.away = data['2014090801'].away;

        console.log('Home', $scope.home);
        console.log('Away', $scope.away);

    })

  });
