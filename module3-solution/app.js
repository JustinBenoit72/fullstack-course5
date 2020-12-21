(function () {
  angular.module("NarrowItDownApp", [])
  .controller("NarrowItDownController", NarrowItDownController)
  .service("MenuSearchService", MenuSearchService)
  .directive("foundItems", FoundItemsDirectiveFactory);

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController (MenuSearchService) {
    var controller = this;

    controller.searchTerm = "";
    controller.isEmpty = false;

    controller.updateItems = function () {
      if (controller.searchTerm === "") {
        controller.isEmpty = true;
      }
      else {
        var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
        promise.then(function (result) {
          controller.found = result;
          if (controller.found.length == 0) {
            controller.isEmpty = true;
          }
          else {
            controller.isEmpty = false;
          }
        });
      }

    };

    controller.onRemove = function (index) {
      controller.found.splice(index, 1);
    };
    
  }

  MenuSearchService.$inject = ["$http"];
  function MenuSearchService ($http) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function (result) {
        // process result and only keep items that match
        var allItems = result.data.menu_items;
        var foundItems = [];
        for (var i = 0; i < allItems.length; i++) {
          if (allItems[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
            foundItems.push(allItems[i]);
          }
        }
        // return processed items
        return foundItems;
      });
    };
  }

  function FoundItemsDirectiveFactory () {
    var ddo = {
      restrict: "E",
      templateUrl: "foundItems.html",
      controller: "NarrowItDownController as ctrl",
      bindToController: true,
      scope: {
        foundItems: "<",
        onRemove: "&"
      }
    };

    return ddo;
  }
})();
