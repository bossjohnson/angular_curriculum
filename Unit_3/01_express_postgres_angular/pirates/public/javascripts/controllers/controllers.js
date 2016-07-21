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

    $scope.removePirate = function(id) {
        PiratesService.removePirate(id)
            .then(() => {
                var pirates = $scope.view.pirates;
                for (var i = 0; i < pirates.length; i++) {
                    if (pirates[i].id === id) {
                        pirates.splice(i, 1);
                        break;
                    }
                }

            });

    }
}
PiratesController.$inject = ['$scope', 'PiratesService'];
