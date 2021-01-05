(function() {
  'use strict';

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['UserInfoService'];
  function SignupController(UserInfoService) {
    var signupCtrl = this;

    if (UserInfoService.infoAvail) {
      signupCtrl.user = UserInfoService.getUserInfo();
    }

    signupCtrl.submit = function () {
      UserInfoService.setUserInfo(signupCtrl.user);
    };
  }
})();
