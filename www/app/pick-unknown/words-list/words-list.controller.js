(function() {
  angular
    .module('starter.pick-unknown')
    .controller('WordsList', WordsList);

  WordsList.$inject = ['$scope'];



  function WordsList($scope) {
    var vm = this;

      // interface
      vm.activate = activate;

      // listeners
      $scope.$on("$ionicView.loaded", function() {

        loaded();
      });

      $scope.$on("$ionicView.afterEnter", function() {
        vm.activate();
      });


      // functions
      function loaded() {
        vm.data = {
          items :  [

{title: 'ion-list item without ng-click'},
{title: 'transitivoj'},
{title: 'sensibilizarv'},
{title: 'publicistaj'},
{title: 'adherencian'},
{title: 'remendadoj'},
{title: 'endulzarv'},
{title: 'terceton'},
{title: 'triciclon'},
{title: 'dopaminan'},
{title: 'nigerian'},
{title: 'novatoj'},
{title: 'hangarn'},
{title: 'psicosisn'},
{title: 'solapadoj'},
{title: 'octogenarioj'},
{title: 'sampern'},
{title: 'tácitamenter'},
{title: 'meollon'},
{title: 'pulmonían'},
{title: 'explicitarv'},
{title: 'madrugadorn'},
{title: 'presencialj'},
{title: 'soleran'},
{title: 'caballan'},
{title: 'subastadoj'},
{title: 'deshonestidadn'},
{title: 'oxidanten'},
{title: 'nativan'},
{title: 'trombónj'},
{title: 'espectroscopian'},
{title: 'hermafroditaj'},
{title: 'placitan'},
{title: 'mauriciov'},
{title: 'agachadoj'},
{title: 'octogenarioj'},
{title: 'sampern'},
{title: 'tácitamenter'},
{title: 'meollon'},
{title: 'pulmonían'},
{title: 'explicitarv'},
{title: 'madrugadorn'},
{title: 'presencialj'},
{title: 'soleran'},
{title: 'caballan'},
{title: 'subastadoj'},
{title: 'deshonestidadn'},
{title: 'oxidanten'},
{title: 'nativan'},
{title: 'trombónj'},
{title: 'espectroscopian'},
{title: 'hermafroditaj'},
{title: 'placitan'},
{title: 'mauriciov'},
{title: 'agachadoj'},
{title: 'octogenarioj'},
{title: 'sampern'},
{title: 'tácitamenter'},
{title: 'meollon'},
{title: 'pulmonían'},
{title: 'explicitarv'},
{title: 'madrugadorn'},
{title: 'presencialj'},
{title: 'soleran'},
{title: 'caballan'},
{title: 'subastadoj'},
{title: 'deshonestidadn'},
{title: 'oxidanten'},
{title: 'nativan'},
{title: 'trombónj'},
{title: 'octogenarioj'},
{title: 'sampern'},
{title: 'tácitamenter'},
{title: 'meollon'},
{title: 'pulmonían'},
{title: 'explicitarv'},
{title: 'madrugadorn'},
{title: 'presencialj'},
{title: 'soleran'},
{title: 'caballan'},
{title: 'subastadoj'},
{title: 'deshonestidadn'},
{title: 'oxidanten'},
{title: 'nativan'},
{title: 'trombónj'},
{title: 'espectroscopian'},
{title: 'hermafroditaj'},
{title: 'placitan'},
{title: 'octogenarioj'},
{title: 'sampern'},
{title: 'tácitamenter'},
{title: 'meollon'},
{title: 'pulmonían'},
{title: 'explicitarv'},
{title: 'madrugadorn'},
{title: 'presencialj'},
{title: 'soleran'},
{title: 'caballan'},
{title: 'subastadoj'},
{title: 'deshonestidadn'},
{title: 'oxidanten'}
          ],
          test: 'test'
        }
      }

      function activate() {

      }    
  }

 
})();
