var myApp = angular.module('myApp', []);

var phoneApp = {}

phoneApp.controllers = {}
phoneApp.controllers.AppCtrl = function($scope){

  this.sayHi = function(){
    alert('hi');
  };

  return $scope.AppCtrl = this;
};


phoneApp.directives = {}
phoneApp.directives.panel = function(){

  return {
    restrict: 'E'
  };

}

myApp.directive(phoneApp.directives);
myApp.controller(phoneApp.controllers);