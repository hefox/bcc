'use strict';

/**
 * @ngdoc function
 * @name bccApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bccApp
 */
angular.module('bccApp')
  .controller('MonthCtrl', function (calendarService, $scope, $routeParams) {
    $scope.year = $routeParams.year;
    $scope.years = calendarService.getYears();
    $scope.monthId = $routeParams.monthId;
    $scope.calendar = calendarService.getCalendar($scope.year);
    $scope.descCount = 0;
    if ($scope.monthId === 'cover') {
      $scope.image =$scope.calendar.cover;
      $scope.name = $scope.calendar.coverMan ? $scope.calendar.coverMan.name : '';
      $scope.displayMonth = 'Cover';
      $scope.isNormalMonth = false;
      $scope.prev = false;
      $scope.next = $scope.calendar.back ? 'back' : 0;
      $scope.people = [];
      if ($scope.calendar.coverMan) {
        $scope.people.push($scope.calendar.coverMan);
        if ($scope.calendar.coverMan.desc) {
          $scope.descCount++;
        }
      }
    }
    else if ($scope.monthId === 'back') {
      $scope.image =$scope.calendar.back;
      $scope.name = $scope.calendar.backMan ? $scope.calendar.backMan.name : '';
      $scope.displayMonth = 'Back';
      $scope.isNormalMonth = false;
      $scope.prev = 'cover';
      $scope.next = 0;
      $scope.people = [];
      if ($scope.calendar.backMan) {
        $scope.people.push($scope.calendar.backMan);
        if ($scope.calendar.backMan.desc) {
          $scope.descCount++;
        }
      }
    }
    else {
      $scope.monthId = parseInt($routeParams.monthId);
      $scope.month = $scope.calendar.months[$scope.monthId];
      // Ternary of doom just sets the previous slide, back or cover if January and those exists.
      $scope.prev = $scope.monthId > 0 ? $scope.monthId - 1 : ($scope.calendar.back ? 'back' : ($scope.calendar.cover ? 'cover' : false));
      $scope.next = $scope.monthId < 11 ? $scope.monthId + 1 : false;
      $scope.displayMonth = $scope.month.getMonthName();
      $scope.isNormalMonth = true;
      $scope.name = $scope.month.getDisplayName();
      $scope.image = $scope.month.getImage();
      $scope.people = $scope.month.people;
      for (var key in $scope.month.people) {
        if ($scope.month.people[key].desc) {
          $scope.descCount++;
        }
      }
    }
  });
