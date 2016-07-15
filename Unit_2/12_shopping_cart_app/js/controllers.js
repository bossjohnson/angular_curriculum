app.controller('teaShopController', teaShopController);

function teaShopController($scope, $http) {
    // initialize scope.view with an empty teas array
    $scope.view = {
        teas: [],
        bag: []
    };

    // get tea data from teas.json and add it to $scope.view.teas
    $http.get('teas.json')
        .then(function(data) {
            data.data.map(addTeasToScope);
        });

    function addTeasToScope(thisTea) {
        $scope.view.teas.push(thisTea);
    }
}
teaShopController.$inject = ['$scope', '$http'];




app.controller('checkoutController', checkoutController);

function checkoutController() {

}
checkoutController.$inject = [''];
