var app = angular.module('CalculatorApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/add', {
            templateUrl: 'partials/result.html',
            controller: 'addController'
        })
        .when('/sub', {
            templateUrl: 'partials/result.html',
            controller: 'subController'
        })
        .when('/mul', {
            templateUrl: 'partials/result.html',
            controller: 'mulController'
        })
        .when('/div', {
            templateUrl: 'partials/result.html',
            controller: 'divController'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
});
