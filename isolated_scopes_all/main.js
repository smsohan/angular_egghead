var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', function($scope){

  $scope.size = 10;

  $scope.modelsForNike = function(brand){
    alert('Air, Plus');
  };

  $scope.modelsForAdidas = function(brand){
    alert('AllYear, Running');
  };

});


myApp.directive('shoe', function(){

  return {

    restrict: 'E',

    scope: {
      size: '=',
      brand: '@',
      model: '&'
    },

    template: 'Size: <input type="text" ng-model="size"/>' +
      'Model: <input type="text" ng-model="brand"/>' +
      'Brand: <div ng-click="model({brand: brand})">Models</div>'

  }


})