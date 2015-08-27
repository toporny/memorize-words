(function() {
  angular
    .module('starter.common')
    .config(routes);

  routes.$inject = []; //'$stateProvider', '$urlRouterProvider'

  function routes() {  //$stateProvider, $urlRouterProvider

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // state.resolve isn't used because ionic has events to manage
    // caching in the views.

    // $stateProvider  // setup an abstract state for the menu directive
    // .state('app', {
    //   url: "/app",
    //   abstract: true,
    //   templateUrl: "app/common/menu.html",
    //   controller: "Menu as menu"
    // });
  }
})();
