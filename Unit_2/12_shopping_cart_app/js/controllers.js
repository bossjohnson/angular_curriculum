app.controller('teaShopController', teaShopController);
teaShopController.$inject = ['$scope', '$rootScope', '$http', '$location', '$timeout'];

function teaShopController($scope, $rootScope, $http, $location, $timeout) {
    $rootScope.view = {
        bag: []
    };
    $scope.view = {
        teas: [],
        categories: []
    };
    $scope.addToBag = addToBag;
    $scope.redirectToCheckout = redirectToCheckout;

    $http.get('teas.json')
        .then(function(data) {
            var teas = data.data;
            teas.map(addTeasToScope);
            $scope.view.teas.forEach(tea => {
                tea.categories.map(addCategoriesToScope);
            });
        });

    function addTeasToScope(tea) {
        $scope.view.teas.push(tea);
    }

    function addCategoriesToScope(category) {
        if ($scope.view.categories.indexOf(category) === -1) {
            $scope.view.categories.push(category);
        }
    }

    function addToBag(item) {
        $timeout(() => {
            $rootScope.view.bag.push(item);
        }, 1000);
    }

    function redirectToCheckout() {
        var totalPrice = 0;
        var bag = $rootScope.view.bag;
        console.log('bag:', bag);
        for (var i = 0; i < bag.length; i++) {
            totalPrice += bag[i].price * Number(bag[i].quantity);
        }
        $rootScope.view.totalPrice = totalPrice;
        $location.url('/checkout');
    }
}

app.controller('checkoutController', checkoutController);

function checkoutController($scope, $rootScope) {

}
checkoutController.$inject = ['$scope', '$rootScope'];
