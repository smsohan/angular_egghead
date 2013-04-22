var myApp = angular.module('myApp', []);

myApp.config(function($routeProvider){

  $routeProvider.when('/:message', {
    templateUrl: "app.html",
    controller: 'AppCtrl',
    resolve: {
      app: function($q, $timeout){
        var defer = $q.defer();

        $timeout(function(){
          defer.resolve();
        }, 2000);

        return defer.promise;
      }
    }
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