var myApp = angular.module('myApp', []);

myApp.directive('dumbpassword', function(){
  var validElement = angular.element("<div>{{model.input}}</div>");

  return {
    restrict: 'E',
    replace: true,
    template: '<div><input type="text" ng-model="model.input" /></div>',

    compile: function(template){
      template.append(validElement);

      return function(scope, element){
        scope.$watch("model.input", function(value){
          validElement.toggleClass("alert-box");
        });
      };
    }
  };

});