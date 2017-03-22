

(function() {
  var app = angular.module('todo', []);

  app.controller('TodoCtrl', ['$scope', function($scope) {
    $scope.name = 'Paul';
  }]);
})();