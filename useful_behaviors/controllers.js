//init the app module, no dependencies
var myApp = angular.module('myApp', []);

myApp.directive("enter", function(){

  return function(scope, element, attrs){
    element.bind('mouseenter', function(){
      element.addClass(attrs.enter);
    });
  };

});

myApp.directive("leave", function(){

  return function(scope, element, attrs){
    element.bind('mouseleave', function(){
      element.removeClass(attrs.enter);
    });
  };

});
