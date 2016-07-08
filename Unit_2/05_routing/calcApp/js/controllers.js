app.controller('addController', function($scope, $routeParams) {
    $scope.view = {
        result: parseInt($routeParams.num1) + parseInt($routeParams.num2)
    };
});
app.controller('subController', function($scope, $routeParams) {
    $scope.view = {
        result: parseInt($routeParams.num1) - parseInt($routeParams.num2)
    };
});
app.controller('divController', function($scope, $routeParams) {
    $scope.view = {
        result: parseInt($routeParams.num1) / parseInt($routeParams.num2)
    };
});
app.controller('mulController', function($scope, $routeParams) {
    $scope.view = {
        result: parseInt($routeParams.num1) * parseInt($routeParams.num2)
    };
});
