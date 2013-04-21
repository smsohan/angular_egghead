//init the app module, no dependencies
var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', function($scope){
  $scope.callHome = function(message){
    alert(message);
  };
});

myApp.directive("phone", function(){

  return {
    template:
      '<input type="text" ng-model="message"/>' +
      '<div ng-click="dial({message: message})">Call Home</div>',
    scope: {
      dial: '&'
    }
  }

});