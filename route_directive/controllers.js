var myApp = angular.module('myApp', []);

myApp.config(function($routeProvider){

  $routeProvider.when('/', {
    templateUrl: "app.html",
    controller: 'ViewCtrl',
    resolve: {
      loadData: viewCtrl.loadData
    }
  })

});

myApp.directive("error", function($rootScope){

  return {
    restrict: 'E',
    templateUrl: 'alert.html',

    link: function(scope){
      $rootScope.$on('$routeChangeError', function(){
        scope.isError = true;
      });
    }

  }

});

var viewCtrl = myApp.controller('ViewCtrl', function($scope, $routeParams, $route, $q){
  $scope.model = {title: "Hello " + ($routeParams.message ? $routeParams.message : 'There')};

  console.log($route);
});

viewCtrl.loadData = function($q, $timeout){
  var defer = $q.defer();

  $timeout(function(){
    defer.reject('loaded data');
  }, 500);

  return defer.promise;
}

myApp.controller('AppCtrl', function($rootScope){

});