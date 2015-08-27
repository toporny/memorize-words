(function() {
  angular
    .module('starter.common')
    .factory('topornyDatabase', topornyDatabase);

  topornyDatabase.$inject = ['$cordovaSQLite', '$q'];

  function topornyDatabase($cordovaSQLite, $q) {

    db = null;

    // interface

    var service = {
      InitDB: InitDB,
      readData: readData,
      saveData: saveData
    };

    return service;

    // functions

    function InitDB() {

      // "sqlite3 /data/data/com.ionicframework.myappblank729313/databases/141.db"

      db = window.openDatabase("My Database1", "1.0", "Cordova Demo", 5000);//db = window.openDatabase( {name: "141.db", createFromLocation: 1} );

      // if (window.sqlitePlugin !== undefined) {
      //     console.log('Open database for SQL plugin');
      //     db = window.sqlitePlugin.openDatabase( {name: "141.db", createFromLocation: 1} ); //db = window.sqlitePlugin.openDatabase("My Database1");
          
      // } else {
      //     console.log('Open database for simulator');
      //     db = window.openDatabase("My Database1", "1.0", "Cordova Demo", 5000);//db = window.openDatabase( {name: "141.db", createFromLocation: 1} );
      // }
      // //db = $cordovaSQLite.openDB("sqlite.db");
      // $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS words (id integer primary key, word_status integer, english_word text, pl_translation text, pl_json text)");

    }


    function readData() {
      console.log('readData..');

      var deferred = $q.defer();

      lastname = 'zenek2';
      query = "SELECT firstname, lastname FROM people WHERE lastname = 'zenek2'";
      // $cordovaSQLite.execute(db, query, [
      //   ]).then(function(res) {
      //     if(res.rows.length > 0) {
      //         console.warn("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname);
      //     } else {
      //          console.log("database query returned 0 rows.");
      //     }
      //     deferred.resolve(res);
      // }, function (err) {
      //     console.log("-------------------- database query returned 0 rows. ------------------------");
      //     deferred.reject('error from database');
      //     console.error(err);
      // });

      // Return the promise to the controller
      return deferred.promise;

    }
    
    function saveData() {
      console.log('saveData..');

      var firstname = 'zenek';
      var lastname = 'zenek2';

      var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
      $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
          console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
          console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
          console.log("INSERT ID -> " + res.insertId);
      }, function (err) {
          console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
          console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
          console.error(err);
      });      
    }    

  }
})();
