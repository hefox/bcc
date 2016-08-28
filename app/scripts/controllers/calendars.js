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
    var cal = calendarService.getCalendar();
    $scope.calendars = [];
    for (var key in cal) {
      $scope.calendars.unshift(cal[key]);
    }
    $scope.getCalendarCover = calendarService.getCalendarCover;
  });
