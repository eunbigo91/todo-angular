
angular.module('todo').directive('todoTitle', function() {
    return {
        template: '<h1>Things to do<h1>'
    }
});

angular.module('todo').directive('todoItem', function() {
    return {
        //templateUrl: 'todoItem.tpl.html'
        template: '<div class="input-group">' +
                '<span class="input-group-addon">' +
                    '<input type="checkbox" ng-model="todo.completed">' +
                '</span>' +
                '<input type="text" class="form-control" ng-model="todo.title">' +
                '<span class="input-group-btn">' +
                    '<button class="btn btn-danger" type="button" ng-click="remove(todo)"> Delete </button>' +
                '</span>' +
            '</div>' +
            '<date> {{ todo.createdAt | date:"yyyy-MM-dd"}}</date>'
    }
});


angular.module('todo').directive('todoFilters', function() {
    return {
        //templateUrl: 'todoFilters.tpl.html'
        template: '<button class="btn btn-primary" ng-click="statusFilter={completed:true}">Completed</button>' +
        '<button class="btn btn-primary" ng-click="statusFilter={completed:false}">Active</button>' +
        '<button class="btn btn-primary" ng-click="statusFilter={}">All</button>'
    }
});

angular.module('todo').directive('todoForm', function() {
    return {
        //templateUrl: 'todoForm.tpl.html'
        template:
            '<form name="todoForm" ng-submit="add(newTodoTitle)">' +
                '<div class="input-group">' +
                    '<input type="text" class="form-control" ng-model="newTodoTitle" placeholder="Write a new thing to do" minlength="3" autofocus>' +
                    '<span class="input-group-btn">' +
                        '<button class="btn btn-success" type="submit">Add</button>' +
                    '</span>' +
                '</div>' +

                '<div ng-show="todoForm.$dirty && todoForm.$invalid">' +
                    '<div class="alert alert-warning" role="alert"> Write more than three letters.' +
                    '</div>' +
                '</div>' +
            '</form>'
    }
});