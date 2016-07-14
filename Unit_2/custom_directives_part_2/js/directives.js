app.directive('gsChangeBackground', function() {
    return {
        restrict: 'A',
        scope: {
            newColor: '@?',
            newTextColor: '@?'
        },
        controller: function($scope) {
            $scope.newColor = angular.isDefined($scope.newColor) ?
                $scope.newColor :
                'yellow';
        },
        link: function(scope, element, attrs) {
            var oldColor = element.css('background-color');
            var oldTextColor = element.css('color') || 'black';
            console.log(oldTextColor);
            element.on('mouseenter', function(event) {
                element.css('background-color', scope.newColor);
                element.css('color', scope.newTextColor)
            });
            element.on('mouseleave', function(event) {
                element.css('background-color', oldColor);
                element.css('color', oldTextColor);
            });
        }
    };
});
