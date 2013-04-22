var app = angular.module('app', []);

app.provider('game', function(){
  var type;

  return {
    $get: function(){
      return {title: 'Soccer ' + type};
    },

    setType: function(value){
      type = value;
    }
  }

});

app.config(function(gameProvider){
  gameProvider.setType('European');
})

app.controller('AppCtrl', function($scope, game){
  $scope.title = game.title;
});