var app = angular.module('app', []);

//these ones, by convention of $ prefix, is a dependency injection
//hence, the order doesn't change the assigned value
app.controller('MyCtrl', function($http, $scope){
  console.log($scope);
});

app.directive('gaga', function(){

  //these ones are just usual method args, value is assined irrespective of what they are called
  //even if $scope is used, this doesn't inject
  return function(someScope, element, attrs){
    console.log(someScope);
  }

});