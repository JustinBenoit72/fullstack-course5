(function () {
  'use strict';

angular.module('Data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categoryList'];
function CategoriesController (categoryList) {
  var categoryListCtrl = this;
  categoryListCtrl.categories = categoryList.data;
}
})();
