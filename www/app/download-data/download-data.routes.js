(function() {
  angular
    .module('starter.download-data')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider
      .state('download-data', {
        url: '/download-data',
        controller: 'DownloadData as downloadData',
        templateUrl: 'app/download-data/download-data.html'
      })
      ;
  }
})();
