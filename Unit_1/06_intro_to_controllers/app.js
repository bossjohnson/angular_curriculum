var app = angular.module('firstApp', []);
app.controller('MyFirstController', function($scope) {
    $scope.name = 'Severus Snape'; // sets initial controller state
});
app.controller('ExercisesController', function($scope) {
    $scope.favColor = 'purple';
    var seconds = 60;
    var minutes = 60;
    var hours = 24;
    var days = 365;
    var years = 1000;
    $scope.secondsInACentury = seconds * minutes * hours * days * years;
    $scope.rightNow = Date.now();
});
