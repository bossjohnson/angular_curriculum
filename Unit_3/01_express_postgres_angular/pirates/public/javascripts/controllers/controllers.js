app.controller('PiratesController', PiratesController);

function PiratesController($scope, PiratesService) {
    $scope.view = {
      addPirate: false
    };
    $scope.newPirate = {};


    PiratesService.all()
        .then(function(data) {
            $scope.view.pirates = data.data;
        });
}
PiratesController.$inject = ['$scope', 'PiratesService'];
