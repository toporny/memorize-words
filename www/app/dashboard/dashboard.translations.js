(function() {
  angular
    .module('starter.dashboard')
    .config(english);

  english.$inject = ['$translateProvider'];

  function english($translateProvider) {
    $translateProvider
      .translations('en', {
        DASHBOARD: {
          PICK_UNKNOWN_WORDS: '',
          TEACH_YOURSELF: '',
          TEST_YOURSELF: '',
          HOW_IT_WORKS: '',
          TITLE: '',

          EXIT: ''

          // PICK_UNKNOWN_WORDS: 'PICK UNKNOWN WORDS',
          // TEACH_YOURSELF: 'TEACH YOURSELF',
          // TEST_YOURSELF: 'TEST YOURSELF',
          // HOW_IT_WORKS: 'HOW IT WORKS',
          // EXIT: 'EXIT'
        }
      });
  }
})();
