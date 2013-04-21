var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', function($scope){

  this.sayHi = function(){
    alert('hi');
  };

  return $scope.AppCtrl = this;
});