(function() {
  'use strict';

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['UserInfoService'];
  function SignupController(UserInfoService) {
    var signupCtrl = this;

    signupCtrl.submitted = false;
    signupCtrl.user = {};

    signupCtrl.submit = function () {
      UserInfoService.setUserInfo(signupCtrl.user);
      signupCtrl.submitted = true;
    };
  }
})();
