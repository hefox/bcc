'use strict';

/**
 * @ngdoc function
 * @name bccApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bccApp
 */
angular.module('bccApp')
  .controller('CalendarCtrl', function (calendarService, $scope, $routeParams) {
    $scope.year = $routeParams.year;
    $scope.calendar = calendarService.getCalendar($scope.year);
    $scope.getCalendarCover = calendarService.getCalendarCover;
    $scope.displayName = calendarService.getCalendarMonthDisplayName;
  });
