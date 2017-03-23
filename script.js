

var app = angular.module('todo', []);

app.controller('TodoCtrl', ['$scope', function($scope) {
$scope.todos = [
    {
        id: 1,
        title: 'laundry',
        completed: false,
        createdAt: Date.now()
    },
    {
        id: 2,
        title: 'study',
        completed: true,
        createdAt: Date.now()
    },
    {
        id: 3,
        title: 'work out',
        completed: false,
        createdAt: Date.now()
    }
    ];

    $scope.remove = function(todo) {
        // find todo index in todos
        var idx = $scope.todos.findIndex(function(item) {
            return item.id === todo.id;
        });

        // remove from todos
        if (idx > -1) {
            $scope.todos.splice(idx, 1);
        };
    }
}]);
