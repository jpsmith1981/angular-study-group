'use strict';

/**
 * @ngdoc overview
 * @name angularMeetupApp
 * @description
 * # angularMeetupApp
 *
 * Main module of the application.
 */
angular
  .module('angularMeetupApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'appServices'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
