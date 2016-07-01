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
