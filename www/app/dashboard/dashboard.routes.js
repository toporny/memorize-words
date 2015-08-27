(function() {
  angular
    .module('starter.dashboard')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        controller: 'Dashboard as dashboard',
        templateUrl: 'app/dashboard/dashboard.html'
      })
      ;
  }
})();
