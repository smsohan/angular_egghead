//init the app module, no dependencies
var myApp = angular.module('myApp', []);

myApp.directive("superman", function(){

  return {
    restrict: 'E',
    template: "<div>Here I'm, your superhero</div>"
  };


});