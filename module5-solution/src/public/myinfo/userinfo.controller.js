(function() {
  'use strict';

  angular.module('public')
  .controller('UserInfoController', UserInfoController);

  UserInfoController.$inject = ['UserInfoService', 'favitem'];
  function UserInfoController (UserInfoService, favitem) {
    var userInfoCtrl = this;

    userInfoCtrl.infoAvail = UserInfoService.infoAvail;
    userInfoCtrl.userInfo = UserInfoService.getUserInfo();
    userInfoCtrl.favItemValid = UserInfoService.favItemValid;
    userInfoCtrl.favitem = favitem;
  }
}());
