var myApp = angular.module('myApp', []);

myApp.config(function($routeProvider){

  $routeProvider.when('/', {
    templateUrl: "app.html",
    controller: 'AppCtrl'
  })
  .when('/new', {
    templateUrl: "new.html",
    controller: 'NewCtrl',
  })

});

var appCtrl = myApp.controller('AppCtrl', function($scope, $location, $rootScope){
  $scope.addNew = function(){
    $location.path('/new');
  }

  $rootScope.$on('$routeChangeStart', function(event, current, previous){
    console.log(event.name);
  });

  $rootScope.$on('$routeChangeSuccess', function(event, current, previous){
    console.log(event.name);
  });

});

var newCtrl = myApp.controller('NewCtrl', function($scope){
  $scope.message = "Welcome to the new world"
});