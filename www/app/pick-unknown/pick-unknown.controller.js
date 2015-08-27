(function() {
  angular
    .module('starter.pick-unknown')
    .controller('PickWords', PickWords);

  PickWords.$inject = ['$scope'];



  function PickWordsIntroduction($scope) {
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



  function PickWords($scope) {

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
