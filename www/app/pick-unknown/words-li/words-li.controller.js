(function() {
  angular
    .module('starter.pick-unknown')
    .controller('WordsLi', WordsLi);

  WordsLi.$inject = ['$scope'];



  function WordsLi($scope) {
    var vm = this;

      // interface
      vm.activate = activate;
      vm.click = click;

      // listeners
      $scope.$on("$ionicView.loaded", function() {

        loaded();
      });

      $scope.$on("$ionicView.afterEnter", function() {
        vm.activate();
      });

      function click() {
        console.log('click');
      }



      // functions
      function loaded() {
        vm.data = {
          items :  [

{title: 'ul li with ng-click'},
{title: 'inclementej'},
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
{title: 'cilion'},
{title: 'eructarv'},
{title: 'madrastran'},
{title: 'bisiestoj'},
{title: 'voladuran'},
{title: 'dimorfismon'},
{title: 'tártaroj'},
{title: 'vigorosamenter'},
{title: 'mundij'},
{title: 'pinchon'},
{title: 'infertilidadn'},
{title: 'merluzan'},
{title: 'gordan'},
{title: 'exorbitantej'},
{title: 'olivarn'},
{title: 'hostaln'},
{title: 'cacharv'},
{title: 'perladoj'},
{title: 'preeminentej'},
{title: 'vigésimon'},
{title: 'famélicoj'},
{title: 'agasajon'},
{title: 'paleontologían'},
{title: 'sinsaborn'},
{title: 'almacenajen'},
{title: 'espectroscopion'},
{title: 'dialn'},
{title: 'cervantinoj'},
{title: 'intersticion'},
{title: 'durísimoj'},
{title: 'socialcristianon'},
{title: 'liberadorn'},
{title: 'palmotearv'},
{title: 'ronronearv'},
{title: 'gabánn'},
{title: 'maléficoj'},
{title: 'lucimienton'},
{title: 'beligeranten'},
{title: 'corpúsculon'},
{title: 'compresorn'},
{title: 'caldeon'},
{title: 'baladíj'},
{title: 'maritalj'},
{title: 'sediciónn'},
{title: 'renén'},
{title: 'presbíteron'},
{title: 'molineten'},
{title: 'willyn'},
{title: 'paisajistaj'},
{title: 'anclajen'},
{title: 'cruelmenter'},
{title: 'pacifismon'},
{title: 'gomosoj'},
{title: 'marginadon'},
{title: 'publicitarv'},
{title: 'platón'},
{title: 'agrandadoj'},
{title: 'cortometrajen'},
{title: 'sacrosantoj'},
{title: 'abonadoj'},
{title: 'rudezan'},
{title: 'impostergablej'},
{title: 'maoísmon'},
{title: 'honradamenter'},
{title: 'titánicoj'}


          ],
          test: 'test'
        }
      }

      function activate() {

      }    
  }

 
})();
