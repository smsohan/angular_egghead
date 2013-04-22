var myApp = angular.module('myApp', []);

myApp.config(function($routeProvider){

  $routeProvider.when('/:message', {
    templateUrl: "app.html",
    controller: 'AppCtrl',
    resolve: {
      loadData: appCtrl.loadData
    }
  })

});

var appCtrl = myApp.controller('AppCtrl', function($scope, $routeParams, $route, $q){
  $scope.model = {title: "Hello " + ($routeParams.message ? $routeParams.message : 'There')};

  console.log($route);
});

appCtrl.loadData = function($q, $timeout){
  var defer = $q.defer();

  $timeout(function(){
    defer.resolve('loaded data');
  }, 2000);

  return defer.promise;
}