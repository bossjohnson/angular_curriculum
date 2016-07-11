var app = angular.module('MovieSearchApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        })
        .when('/details', {
            templateUrl: 'partials/details.html',
            controller: 'DetailsController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
