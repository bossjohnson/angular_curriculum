var app = angular.module('ValidationApp', []);

app.controller('Validator', function($scope) {
    $scope.logErr = function(err) {
        console.log(err);
    };
});

app.controller('UserFormController', function($scope) {
    $scope.users = [];
    $scope.submit = function(event) {
        event.preventDefault();
        $scope.users.push({
            username: $scope.user.username,
            password: $scope.user.password,
            email: $scope.user.email,
            zip: $scope.user.zip
        });
        $scope.user = {};
        $scope.userForm.$setUntouched();
        $scope.userForm.$setPristine();
    };
});
