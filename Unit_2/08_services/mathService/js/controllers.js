app.controller('MathController', ['$scope', 'jnMathService', function($scope, jnMathService) {
    $scope.calc = {
        operation: 'add',
        result: ''
    };
    $scope.calc.calculate = function() {
        return jnMathService[$scope.calc.operation];
    };
}]);
