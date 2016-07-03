var app = angular.module('myApp', []);
app.controller('myController', function($scope) {
    $scope.view = {};
    $scope.view.number = 5;
    $scope.view.word = 'Word';

    $scope.pickRandomNumber = function() {
        $scope.view.number = Math.floor(Math.random() * 10) + 1;
    };
    $scope.reverseWord = function() {
        $scope.view.word = this.view.word.split('').reverse().join('');
    };
});

app.controller('PingPongController', function($scope) {

    $scope.scores = {};

    $scope.resetScores = function() {
        $scope.scores.playerOne = 0;
        $scope.scores.playerTwo = 0;
        $scope.scores.pointsPlayed = 0;
        $scope.scores.gameOver = false;
        $scope.scores.playerServing = 1;
    };

    $scope.incrementScore = function(player) {
        if (!$scope.scores.gameOver) {
            $scope.scores[player]++;
            if ($scope.scores[player] === 11) {
                $scope.scores.gameOver = true;
            }
            $scope.scores.pointsPlayed++;
            var points = $scope.scores.pointsPlayed;
            $scope.scores.playerServing = points % 4 === 2 || points % 4 === 3 ? 2 : 1;
        }
    };

    $scope.resetScores();
});

app.controller('MouseEnterController', function($scope) {
    $scope.view = {};
    $scope.view.enterCount = 0;
});

app.controller('RandomColors', function($scope, $timeout) {

    $scope.colors = {};
    $scope.colors.list = [];

    $scope.randomColor = function randomColor() {
        var x = Math.round(0xffffff * Math.random()).toString(16);
        var y = (6 - x.length);
        var z = "000000";
        var z1 = z.substring(0, y);
        var color = "#" + z1 + x;
        $scope.colors.list.push(color);
        $scope.colors.startReplayAt = $scope.colors.list.length - 1;
        return color;
    };

    $scope.replay = function(start) {
        $timeout(function() {
            $scope.colors.color = $scope.colors.list[start - 1];
            if (start > 0) {
                $scope.replay(start - 1);
            } else {
                $timeout(function() {
                    $scope.colors.color = 'white';
                    $scope.colors.list = [];
                }, 500);
            }
        }, 500);
    };
});

app.controller('AddressController', function($scope) {
    $scope.address = {};
    $scope.copiedAddresses = [];

    $scope.submit = function() {
        $scope.copiedAddresses.push(angular.copy($scope.address));
        console.log($scope.copiedAddresses);
        $scope.resetForm();
    };

    $scope.resetForm = function() {
        $scope.address.street1 = '';
        $scope.address.street2 = '';
        $scope.address.city = '';
        $scope.address.state = '';
        $scope.address.zip = '';
    };

    $scope.resetForm();
});
