app.directive('jnTeaItem', function jnTeaItem($window, $timeout, $animate) {
    return {
        templateUrl: 'partials/teaItem.html',
        restrict: 'A',
        controller: teaShopController,
        link: function(scope, element) {
            var miniTea = angular.element('<img src="' + scope.tea.imageUrl + '" alt="tea" class="miniTea">');
            
            scope.flyingTea = function() {
                var checkoutButton = element.parent().parent().parent().find('button')[0];
                var rect = checkoutButton.getBoundingClientRect();
                var checkoutX = rect.left + rect.width / 2;
                var checkoutY = rect.top - rect.height / 2;

                element.find('img').parent().prepend(miniTea);
                console.log(miniTea);
                $animate.animate(miniTea[0], {
                    top: miniTea[0].offsetTop - $window.scrollY + 'px',
                    left: miniTea[0].offsetLeft - $window.scrollX + 'px'
                }, {
                    top: checkoutY + 'px',
                    left: checkoutX + 'px'
                });
                $timeout(function() {
                    $animate.animate(miniTea[0], {
                        opacity: '.8'
                    }, {
                        opacity: '0'
                    });
                }, 1000);
                $timeout(function() {
                    miniTea.remove();
                }, 2000)
            };
        }
    };
    jnTeaItem.$inject = ['$window', '$timeout', '$animate'];
});

app.directive('jnCheckoutButton', jnCheckoutButton);

function jnCheckoutButton() {
    return {
        templateUrl: '',
        restrict: 'A',
        link: function(scope, element) {
            var buttonTop = element[0].getBoundingClientRect().top;
            var buttonRight = element[0].getBoundingClientRect().right;
            scope.view.checkoutButtonTop = buttonTop;
            scope.view.checkoutButtonRight = buttonRight;

        }
    };
}
