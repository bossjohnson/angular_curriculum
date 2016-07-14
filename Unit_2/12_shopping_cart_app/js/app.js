var app = angular.module('ShoppingCartApp', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/teaShop.html',
            controller: 'teaShopController'
        })
        .when('/checkout', {
            templateUrl: 'partials/checkout.html',
            controller: 'checkoutController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.$inject = ['$routeProvider'];
