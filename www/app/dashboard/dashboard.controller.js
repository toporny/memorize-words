(function() {
  angular
    .module('starter.dashboard')
    .controller('Dashboard', Dashboard);

// http://www.lextutor.ca/freq/lists_download/longman_3000_list.pdf
// https://www.englishwithexperts.com/blog/posts/files/5000MostCommonWords.pdf
// http://www.telerik.com/blogs/adding-dynamic-data-with-the-sqlite-plugin

  Dashboard.$inject = ['$scope', '$q', '$state' ,'topornyDatabase' ];
  function Dashboard   ($scope, $q, $state, topornyDatabase ) {

    var vm = this;
    vm.goToPickUnknown = goToPickUnknown;
    vm.goToIntroduction = goToIntroduction;
    vm.goToWordsList = goToWordsList;
    vm.goToWordsLi = goToWordsLi;
    vm.testYourSelf = testYourSelf;
    vm.goToDownloadData = goToDownloadData;



    // interface
    vm.activate = activate;

    // listeners
    $scope.$on("$ionicView.loaded", function() {
      loaded();
    });

    $scope.$on("$ionicView.beforeEnter", function() {
      vm.activate();
    });

    // functions

    function loaded() {
    }

    function activate() {
        //console.log('a', topornyDatabase.readData());
        vm.data = {
            buttonName: '.'
        }

         topornyDatabase.InitDB();
         //topornyDatabase.saveData();
        // topornyDatabase.saveData();
        // topornyDatabase.saveData();
        
        topornyDatabase.readData()
        .then(function(d) {
            console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
            console.log('d', d);
            console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
            console.log('d', d.rows.item(0).firstname);
            vm.data.buttonName = d.rows.item(0).firstname;
        },
        function(data) {
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
            console.log('data', data);
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
            // Handle error here
        });


    }



    function goToPickUnknown () {


    //     console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");
    //     console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");

    // db = $cordovaSQLite.openDB("sqlite.db");
    // $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");

    // var firstname = 'zenek';
    // var lastname = 'zenek2';

    // var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
    // $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
    //     console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    //     console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    //     console.log("INSERT ID -> " + res.insertId);
    // }, function (err) {
    //     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    //     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    //     console.error(err);
    // });


    // lastname = 'zenek2';
    // query = "SELECT firstname, lastname FROM people WHERE lastname = 'zenek2'";
    // $cordovaSQLite.execute(db, query, [
    //   ]).then(function(res) {
    //     if(res.rows.length > 0) {
    //         console.log("####################################################################");
    //         console.log("####################################################################");
    //         console.log("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname);
    //     } else {
    //         console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    //         console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    //     }
    // }, function (err) {
    //     console.error(err);
    // });




      $state.go('pick-unknown');
    };

    function goToIntroduction() {
      $state.go('pick-unknown-introduction');
    }

    function goToWordsList() {
      $state.go('words-list');
    }
    function goToWordsLi() {
      $state.go('words-li');
    }

    function testYourSelf() {
      $state.go('test-yourself');
    }

    function goToDownloadData() {
        console.log('function goToDownloadData() {');
      $state.go('download-data');
    }







  }
})();

