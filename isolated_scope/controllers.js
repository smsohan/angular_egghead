//init the app module, no dependencies
var myApp = angular.module('myApp', []);

myApp.controller('ChoreCtrl', function($scope){

  $scope.logChore = function(chore){
    alert(chore + " is done");
  }

});

myApp.directive("kid", function(){

  return {
    scope: {
      done: "&"
    },
    restrict: 'E',
    template: '<input type="text" ng-model="chore"/> {{chore}}' +
      '<div ng-click="done({chore: chore})">Im done</div>'

  };

});