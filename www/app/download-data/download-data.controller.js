(function() {
  angular
    .module('starter.download-data')
    .controller('DownloadData', DownloadData);

  DownloadData.$inject = ['$scope'];



  function DownloadData($scope) {
    var vm = this;

      // interface
      vm.activate = activate;

      // listeners
      $scope.$on("$ionicView.loaded", function() {

   
        loaded();
      });

      $scope.$on("$ionicView.beforeEnter", function() {
        console.log(345);
        vm.activate();
      });


      // functions
      function loaded() {
        vm.data = {
          items :  [
            {title: "Item 1"},
            {title: "Item 2"},
            {title: "Item 3"},
            {title: "Item 4"},
            {title: "Item 5"},
          ],
          test: 'test'
        }
      }

      function activate() {

      }    
  }



  function DownloadData($scope) {

    var vm = this;

    // interface
    vm.activate = activate;

    // listeners
    $scope.$on("$ionicView.loaded", function() {

      loaded();
    });

    $scope.$on("$ionicView.beforeEnter", function() {
      console.log(345);
      vm.activate();
    });


    // functions
    function loaded() {
      vm.data = {
        items :  [
          {title: "Item 1"},
          {title: "Item 2"},
          {title: "Item 3"},
          {title: "Item 4"},
          {title: "Item 5"},
        ],
        test: 'test'
      }
    }

    function activate() {

    }

  }
})();
