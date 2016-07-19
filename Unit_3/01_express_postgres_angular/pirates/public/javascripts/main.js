var app = angular.module('pirates', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/pirates.html'
        })
        .when('/add', {
            templateUrl: '../views/addPirate.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
