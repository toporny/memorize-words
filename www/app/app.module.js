(function() {
  angular
    .module('starter', [
      'ionic',
      'ngCordova',
      'pascalprecht.translate',
      'starter.common',
      'starter.dashboard',
      'starter.pick-unknown',
      'starter.download-data'

    ])
    .run(run);

  run.$inject = ['$ionicPlatform'];


  function run($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // false means show the  accessory bar above the keyboard
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      }

      $ionicPlatform.on('resume', __onResume);
    });

    function __onResume() {
      
    }
  }
})();
