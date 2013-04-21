var myApp = angular.module('myApp', []);

myApp.config(function($routeProvider){

  $routeProvider.when('/:message', {
    templateUrl: "app.html",
    controller: 'AppCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })

});

myApp.controller('AppCtrl', function($scope, $routeParams){
  $scope.model = {title: "Hello " + ($routeParams.message ? $routeParams.message : 'There')};
});