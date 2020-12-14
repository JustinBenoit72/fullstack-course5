(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getToBuyItems();

  buyList.listEmpty = ShoppingListCheckOffService.IsToBuyEmpty;

  buyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();

  boughtList.listEmpty = ShoppingListCheckOffService.IsBoughtEmpty;
}


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
    {
      name: "Cookies",
      quantity: 10
    },
    {
      name: "Crackers",
      quantity: 5
    },
    {
      name: "Chips",
      quantity: 3
    },
    {
      name: "Salads",
      quantity: 12
    },
    {
      name: "Sodas",
      quantity: 2
    }
  ];
  var boughtItems = [];

  // service.addItem = function (itemName, quantity) {
  //   if ((maxItems === undefined) ||
  //       (maxItems !== undefined) && (items.length < maxItems)) {
  //     var item = {
  //       name: itemName,
  //       quantity: quantity
  //     };
  //     items.push(item);
  //   }
  //   else {
  //     throw new Error("Max items (" + maxItems + ") reached.");
  //   }
  // };
  service.buyItem = function (itemIndex) {
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  };

  // service.removeItem = function (itemIndex) {
  //   items.splice(itemIndex, 1);
  // };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.IsToBuyEmpty = function () {
    return toBuyItems.length == 0;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.IsBoughtEmpty = function () {
    return boughtItems.length == 0;
  };
}

})();
