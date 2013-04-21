var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', function($scope){


});


myApp.directive('panel', function(){

  return {

    restrict: 'E',

    transclude: true,

    template: '<div ng-transclude>This is a panel component</div>'

  }


})