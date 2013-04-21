var myApp = angular.module('myApp', []);


myApp.factory('Players', function() {

  return {all: [
      {name: "Ash", team: "BD"},
      {name: "Sak", team: "BD"},
      {name: "Sag", team: "SL"},
      {name: "ST", team: "IN"},
      {name: "Messi", team: "Arg"},
      {name: "Higuain", team: "Arg"}
    ]
  };

});

function PlayersController($scope, Players){

  $scope.players = Players;

}