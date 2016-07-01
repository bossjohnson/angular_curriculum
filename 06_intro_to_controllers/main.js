var app = angular.module('MadLibs', []);
app.controller('MadLibsController', function($scope) {
    $scope.showMadLib = false;
    $scope.generate = function() {
        this.showMadLib = true;
    };
    $scope.reset = function() {
        this.showMadLib = false;
        var inputs = document.getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
    };
});
