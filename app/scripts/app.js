'use strict';

/**
 * @ngdoc overview
 * @name bccApp
 * @description
 * # bccApp
 *
 * Main module of the application.
 */
angular
  .module('bccApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/calendars.html',
        controller: 'CalendarsCtrl',
      })
      .when('/calendar/:year', {
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl',
      })
      .when('/calendar/:year/:monthId', {
        templateUrl: 'views/month.html',
        controller: 'MonthCtrl',
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'PageCtrl',
      })
      .when('/gonenotforgotten', {
        templateUrl: 'views/dead.html',
        controller: 'DeadCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(['$rootScope', '$location', function($rootScope, $location){
    var path = function() { return $location.path();};
    $rootScope.$watch(path, function(newVal){
      $rootScope.activetab = newVal;
    });
  }])
  .factory('calendarService', function() {
    return new CalendarService();
  });


