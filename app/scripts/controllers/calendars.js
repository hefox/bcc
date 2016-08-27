'use strict';

/**
 * @ngdoc function
 * @name bccApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bccApp
 */
angular.module('bccApp')
  .controller('CalendarsCtrl', function (calendarService, $scope) {
    $scope.calendars = calendarService.getCalendar();
    $scope.getCalendarCover = calendarService.getCalendarCover;
  });
