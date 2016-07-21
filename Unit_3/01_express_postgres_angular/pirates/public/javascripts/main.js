var app = angular.module('pirates', ['ngRoute', 'ngAnimate']);

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
