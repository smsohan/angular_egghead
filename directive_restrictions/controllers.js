//init the app module, no dependencies
var myApp = angular.module('myApp', []);

myApp.directive("superman", function(){

  return {
    restrict: 'A',
    link: function(){
      console.dir(this);
      alert("I'm working");
    }
  };


});


myApp.directive("supermanly", function(){

  return {
    restrict: 'C',
    link: function(){
      alert("I'm working as a class");
    }
  };


});