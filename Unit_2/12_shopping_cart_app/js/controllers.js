app.controller('teaShopController', teaShopController);
teaShopController.$inject = ['$scope', '$rootScope', '$http', '$location', '$timeout', 'jnPriceService'];

function teaShopController($scope, $rootScope, $http, $location, $timeout, jnPriceService) {

    if (!$rootScope.view) {
        $rootScope.view = {
            bag: []
        };
    }

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
        jnPriceService.updateTotal();
        $location.url('/checkout');
    }
}

app.controller('checkoutController', checkoutController);

function checkoutController($scope, $rootScope, jnPriceService) {
    $scope.removeItem = function(index) {
        // console.log(index);
        $rootScope.view.bag.splice(index, 1);
        jnPriceService.updateTotal();
    };
}
checkoutController.$inject = ['$scope', '$rootScope', 'jnPriceService'];
