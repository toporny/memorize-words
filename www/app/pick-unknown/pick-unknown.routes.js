(function() {
  angular
    .module('starter.pick-unknown')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider
      .state('pick-unknown', {
        url: '/pick-unknown',
        controller: 'PickWords as pickWords',
        templateUrl: 'app/pick-unknown/pick-unknown.html'
      })
      .state('pick-unknown-introduction', {
        url: '/introduction',
        controller: 'Introduction as introduction',
        templateUrl: 'app/pick-unknown/introduction/introduction.html'
      })
      .state('words-list', {
        url: '/words-list',
        controller: 'WordsList as wordsList',
        templateUrl: 'app/pick-unknown/words-list/words-list.html'
      })
      .state('words-li', {
        url: '/words-li',
        controller: 'WordsLi as wordsLi',
        templateUrl: 'app/pick-unknown/words-li/words-li.html'
      })   
      ;
  }
})();
