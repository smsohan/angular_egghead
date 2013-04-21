var myApp = angular.module('myApp', []);

myApp.config(function($routeProvider){

  $routeProvider.when('/', {
    templateUrl: "app.html",
    controller: 'AppCtrl'
  })

});

myApp.controller('AppCtrl', function($scope){
  $scope.model = {title: "Hello there!"};
});