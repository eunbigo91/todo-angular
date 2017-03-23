

(function() {
  var app = angular.module('todo', []);

  app.controller('TodoCtrl', ['$scope', function($scope) {
    $scope.todos = [
        {
            title: 'laundry',
            completed: false,
            createdAt: Date.now()
        },
        {
            title: 'study',
            completed: true,
            createdAt: Date.now()
        },
        {
            title: 'work out',
            completed: false,
            createdAt: Date.now()
        }
    ];
  }]);
})();