var myApp = angular.module('myApp', []);

myApp.config(function($routeProvider){

  $routeProvider.when('/:message', {
    templateUrl: "app.html",
    controller: 'AppCtrl'
  })

});

myApp.controller('AppCtrl', function($scope, $routeParams, $q){

  var defer = $q.defer();

  defer.promise.then(function(){
    alert('I will show up!');
  });

  defer.resolve();

  $scope.model = {title: "Hello " + ($routeParams.message ? $routeParams.message : 'There')};
});