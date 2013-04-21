//init the app module, no dependencies
var myApp = angular.module('myApp', []);

//define a factory, aka, service
myApp.factory('Data', function(){
  return {message: "I'm shared data from a service"};
});

// inject the service as a dependency, magically resolved by the name
function FirstCtrl($scope, Data){
  $scope.data = Data;
}

// inject the same service as a dependency, which will share the scope
function SecondCtrl($scope, Data){
  $scope.data = Data;
}