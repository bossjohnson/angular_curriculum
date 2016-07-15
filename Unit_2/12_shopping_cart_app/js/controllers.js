app.controller('teaShopController', teaShopController);

function teaShopController($scope, $http) {
    // initialize scope.view with an empty teas array
    $scope.view = {
        teas: [],
        categories: [],
        bag: []
    };



    // get tea data from teas.json and add it to $scope.view.teas
    $http.get('teas.json')
        .then(function(data) {
            var teas = data.data;
            teas.map(addTeasToScope);
            // add tea categories to scope
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
}
teaShopController.$inject = ['$scope', '$http'];




app.controller('checkoutController', checkoutController);

function checkoutController() {

}
checkoutController.$inject = [''];
