(function() {
  angular
    .module('starter.pick-unknown')
    .controller('Introduction', Introduction);

  Introduction.$inject = ['$scope'];



  function Introduction($scope) {
    var vm = this;

      // interface
      vm.activate = activate;
      vm.addWordToFavoritiesAndPlay = addWordToFavoritiesAndPlay;
      vm.showDetailedTranslation = showDetailedTranslation;

      // listeners
      $scope.$on("$ionicView.loaded", function() {

    
        loaded();
      });

    // listeners
    $scope.$on("$ionicView.loaded", function() {
      loaded();
    });

    $scope.$on("$ionicView.beforeEnter", function() {
      vm.activate();
    });


      // functions
      function loaded() {
        // vm.data = {
        //   items :  [
        //     {title: "Item 1"},
        //     {title: "Item 2"},
        //     {title: "Item 3"},
        //     {title: "Item 4"},
        //     {title: "Item 5"},
        //   ],
        //   test: 'test'
        // }
      }

      function addWordToFavoritiesAndPlay($event, data) {
        $event.stopPropagation();
        console.log('details data', data);
        console.log('play sample', data);
        console.log('details $event', $event);
        data.outline = (!data.outline) ? '-outline' : '';
      }      


      function activate() {
        var vm = this;

         vm.friends = [
          { id: 0, name: 'Scruff McGruff' ,outline: '-outline', description: 'wqrqwe sadfsadfas werwqr'},
          { id: 1, name: 'G.I. Joe'       ,outline: '-outline', description: 'sadfasfasf adfzczxc xxxx'},
          { id: 2, name: 'Miss Frizzle'   ,outline: '-outline', description: 'wewewe errrr ttttt ddddd'},
          { id: 3, name: 'Ash Ketchum'    ,outline: '-outline', description: 'ddddd xxxxxx vvvvv bbbbb'}
        ];
    
        for(var i=0; i<200; i++) {
          vm.friends.push({id:i+4, outline: '-outline', description: 'ddddd xxxxxx vvvvv bbbbb', name:"Person "+i});
        }
        console.log(vm.friends);
      }



      function showDetailedTranslation() {
        console.log('show detailed translation');
      }

  }

 
})();
