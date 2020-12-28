(function () {
  'use strict';

angular.module('Data')
.component('itemList', {
  templateUrl: 'src/data/templates/item-list.template.html',
  bindings: {
    itemData: '<'
  }
});
})();
