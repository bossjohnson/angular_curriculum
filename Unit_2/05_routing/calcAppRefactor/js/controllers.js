app.controller('addController', function($scope, $location) {
    var loc = $location.search();
    $scope.view = {
        result: parseInt(loc.x) + parseInt(loc.y)
    };
});
app.controller('subController', function($scope, $location) {
    var loc = $location.search();
    $scope.view = {
        result: parseInt(loc.x) - parseInt(loc.y)
    };
});
app.controller('divController', function($scope, $location) {
    var loc = $location.search();
    $scope.view = {
        result: parseInt(loc.x) / parseInt(loc.y)
    };
});
app.controller('mulController', function($scope, $location) {
    var loc = $location.search();
    $scope.view = {
        result: parseInt(loc.x) * parseInt(loc.y)
    };
});
