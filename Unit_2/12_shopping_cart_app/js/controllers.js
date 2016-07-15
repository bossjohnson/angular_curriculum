app.controller('teaShopController', teaShopController);
teaShopController.$inject = ['$scope', '$rootScope', '$http'];

function teaShopController($scope, $rootScope, $http) {
    $rootScope.view = {
        bag: []
    };
    $scope.view = {
        teas: [],
        categories: []
    };
    $scope.addToBag = addToBag;

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
        $rootScope.view.bag.push(item);
    }
}

app.controller('checkoutController', checkoutController);

function checkoutController() {

}
checkoutController.$inject = [''];
