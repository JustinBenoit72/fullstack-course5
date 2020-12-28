(function () {
  'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['itemData'];
function ItemsController (itemData) {
  var items = this;
  console.log(itemData.data.menu_items);
  items.listData = itemData.data.menu_items;
}
})();
