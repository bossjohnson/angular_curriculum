app.controller('PiratesController', PiratesController);

function PiratesController($scope) {
    $scope.view = {
        taco: 6 + 9
    };
}
PiratesController.$inject = ['$scope'];
