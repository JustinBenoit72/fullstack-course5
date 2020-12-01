(function () {
  'use strict';

  function itemsCount (itemsList) {
    var items = itemsList.split(',');
    var count = 0;
    for (var item in items) {
      if (items[item].trim() !== "")
        count += 1;
    }
    return count;
  }

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    $scope.lunchItems = "";
    $scope.lunchStatus = "";
    $scope.countLunch = function () {
      if ($scope.lunchItems === "") {
        $scope.lunchStatus = "Please enter data first";
      }
      else if (itemsCount($scope.lunchItems) <= 3) {
        $scope.lunchStatus = "Enjoy!";
      }
      else {
        $scope.lunchStatus = "Too much!";
      }
    };
  }
})();
