(function() {
  angular
    .module('starter.common')
    .config(english);

  english.$inject = ['$translateProvider'];

  function english($translateProvider) {
    $translateProvider
      .translations('en', {
        CORE: {
          POPUP: {
            EXIT: {
              ARE_YOU_SURE_YOU_WANT_TO_EXIT: 'Are you sure you want to exit?',
              WARNING: 'Warning'
            },
            COMMON: {
              ERROR: 'Error',
              ACCEPT: 'Accept',
              OK: 'OK',
              CANCEL: 'Cancel'
            },
          },
        }
      });
  }
})();
