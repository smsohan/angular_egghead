//init the app module, no dependencies
var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', function($scope){

  $scope.loadMoreTweets = function(){
    alert('loading more tweets');
  }

});

myApp.directive('enter', function(){

  return function(scope, element, attrs){

    element.bind('mouseenter', function(){
      scope.$apply(attrs.enter);
    });

  };

});