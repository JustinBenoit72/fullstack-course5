(function() {
  'use strict';

  angular.module('public')
  .service('UserInfoService', UserInfoService);

  UserInfoService.$inject = ['$http', 'ApiPath']
  function UserInfoService($http, ApiPath) {
    var service = this;
    service.infoAvail = false;

    service.setUserInfo = function(user) {
      service.user = user;
      service.infoAvail = true;
    }

    service.getUserInfo = function() {
      var newUserInfo = {};
      if (service.infoAvail){
        newUserInfo.firstname = service.user.firstname;
        newUserInfo.lastname = service.user.lastname;
        newUserInfo.email = service.user.email;
        newUserInfo.phone = service.user.phone;
        newUserInfo.favitem = service.user.favitem;  
      }
      return newUserInfo;
    }

    service.getFavItem = function() {
      if (service.infoAvail) {
        return $http.get(ApiPath + '/menu_items/' + service.user.favitem + '.json')
        .then(function (response){
          service.favItemValid = true;
          return response.data;
        },
        function (reject){
          service.favItemValid = false;
          return;
        });
      }
      else {
        return;
      }
    }
  }
}());
