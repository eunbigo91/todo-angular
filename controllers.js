angular.module('todo').controller('TodoCtrl', ['$scope', function($scope) {
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
            //return item.id === todo.id;
            return item.title === todo.title;
        });

        // remove from todos
        if (idx > -1) {
            $scope.todos.splice(idx, 1);
        };
    };

    $scope.add = function(newTodoTitle) {
        // create new todo
        var newTodo = {
            title: newTodoTitle,
            completed: false,
            createdAt: Date.now()
        };

        // push into todos list
        $scope.todos.push(newTodo);

        // empty form
        $scope.newTodoTitle = '';
    };
}]);
