'use strict';

/**
 * @ngdoc function
 * @name bccApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bccApp
 */
angular.module('bccApp')
  .controller('DeadCtrl', function (calendarService, $scope) {
    $scope.calendars = calendarService.getCalendar();
    var people = calendarService.getPeople();
    $scope.dead = [];
    console.log(people);
    for (var pid in people) {
      if (people[pid].dod) {
        people[pid].image = people[pid].getImage();
        $scope.dead.push(people[pid]);
      }
    }
    $scope.getMonthName = function(monthID) {
      return MonthObj.prototype.getMonthName(monthID);
    };
  });
