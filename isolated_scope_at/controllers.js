//init the app module, no dependencies
var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', function($scope){
  $scope.ctrlFlavor = 'BlackBerry';
});

myApp.directive("drink", function(){

  return {
    template: '<div>{{flavor}}</div>',
    scope: {
      flavor: '@'
    }
  }

});