var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'ContactsAppController'
        })
        .when('/show/:id', {
            templateUrl: 'views/show.html',
            controller: 'showController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
