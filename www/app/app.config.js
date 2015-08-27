(function() {
  angular
    .module('starter' 
      )
    .config(config);

  config.$inject = ['$urlRouterProvider', '$translateProvider', '$ionicConfigProvider']; // $translateProvider,

  function config($urlRouterProvider, $translateProvider, $ionicConfigProvider) {
    // default state
    $urlRouterProvider.otherwise('/dashboard');
    // default language
    $translateProvider.preferredLanguage('en');

    // Disable IOS Swipe Back
    $ionicConfigProvider.views.swipeBackEnabled(false);
  }
})();
