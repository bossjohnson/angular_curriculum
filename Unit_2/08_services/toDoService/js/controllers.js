app.controller('ToDoController', ['$scope', 'jnTaskService', function($scope, jnTaskService) {
    $scope.view = {
        tasks: []
    };
    $scope.addTask = jnTaskService.addTask;
    $scope.deleteTask = jnTaskService.deleteTask;
    $scope.editTask = jnTaskService.editTask;
    $scope.confirmEdit = jnTaskService.confirmEdit;
    $scope.showButtons = jnTaskService.showButtons;
    $scope.hideButtons = jnTaskService.hideButtons;
}]);
