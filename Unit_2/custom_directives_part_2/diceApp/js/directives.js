app.directive('jnDice', function() {
    return {
        templateUrl: 'partials/die.html',
        restrict: 'E',
        scope: {},
        link: function(scope, element, attrs) {
            switch (roll()) {
                case 1:
                    scope.face = 'dieFaces/onePip.png';
                    break;
                case 2:
                    scope.face = 'dieFaces/twoPips.png';
                    break;
                case 3:
                    scope.face = 'dieFaces/threePips.png';
                    break;
                case 4:
                    scope.face = 'dieFaces/fourPips.png';
                    break;
                case 5:
                    scope.face = 'dieFaces/fivePips.png';
                    break;
                case 6:
                    scope.face = 'dieFaces/sixPips.png';
                    break;
            }
        }
    };

    function roll() {
        return Math.ceil(Math.random() * 6);
    }
});

app.directive('jnRoll', function() {
    return {
        restrict: 'A',
        controller: roller
    };

    function roller($scope, $rootScope) {
        $scope.roll = function(numDice) {
            $scope.clear();
            for (var i = 0; i < numDice; i++) {
                $rootScope.view.dice.push(null);
            }
        };
        $scope.clear = function() {
            $rootScope.view.dice = [];
        };
    }
    roller.$inject = ['$scope', '$rootScope'];
});
