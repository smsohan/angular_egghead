//init the app module, no dependencies
var myApp = angular.module('myApp', []);

myApp.directive('superhero', function(){

  return {

    restrict: 'E',

    //isolated scope, when the directive is used multiple times, the scope is not shared
    scope: {},

    //the API to be used by the other directives
    controller: function($scope){

      $scope.abilities = [];

      this.addStrength = function(){
        $scope.abilities.push("strength");
      }

      this.addSpeed = function(){
        $scope.abilities.push("speed");
      }

    },

    link: function(scope, element){

      element.bind('mouseenter', function(){
        console.log(scope.abilities);
      });

    }

  };

});

myApp.directive('strength', function(){

  return {
    require: 'superhero',
    link: function(scope, element, attrs, superheroCtrl){
      superheroCtrl.addStrength();
    }
  };

});

myApp.directive('speed', function(){

  return {
    require: 'superhero',
    link: function(scope, element, attrs, superheroCtrl){
      superheroCtrl.addSpeed();
    }
  };

});