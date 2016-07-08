var app = angular.module('PortfolioApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/projects', {
            templateUrl: 'partials/projects.html ',
            controller: 'ProjectsController'
        })
        .when('/bio', {
            templateUrl: 'partials/bio.html',
            controller: 'BioController'
        })
        .when('/resume', {
            templateUrl: 'partials/resume.html',
            controller: 'ResumeController'
        })
        .otherwise({
            redirectTo: '/projects'
        });
});
