var myApp = angular.module('myApp', []);

myApp.directive('zippy', function($templateCache){

  return {
    restrict: 'E',

    scope: {
      title: '@'
    },

    transclude: true,

    templateUrl: 'zippy.html',

    link: function(scope){
      scope.isContentVisible = false;

      scope.toggleContent = function(){
        scope.isContentVisible = !scope.isContentVisible;
      };

    }
  };

});