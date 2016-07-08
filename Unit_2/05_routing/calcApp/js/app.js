var app = angular.module('CalculatorApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/add/:num1/:num2', {
            templateUrl: 'partials/result.html',
            controller: 'addController'
        })
        .when('/sub/:num1/:num2', {
            templateUrl: 'partials/result.html',
            controller: 'subController'
        })
        .when('/mul/:num1/:num2', {
            templateUrl: 'partials/result.html',
            controller: 'mulController'
        })
        .when('/div/:num1/:num2', {
            templateUrl: 'partials/result.html',
            controller: 'divController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
