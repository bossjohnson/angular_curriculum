app.directive('jnTeaItem', function jnTeaItem($window, $timeout, $animate) {
    return {
        templateUrl: 'partials/teaItem.html',
        restrict: 'A',
        controller: teaShopController,
        link: function(scope, element) {

            scope.flyingTea = function() {
                var miniTea = angular.element('<img src="' + scope.tea.imageUrl + '" alt="tea" class="miniTea">');
                var checkoutButton = element.parent().parent().parent().find('button')[0];
                var rect = checkoutButton.getBoundingClientRect();
                var checkoutX = rect.left + rect.width / 2;
                var checkoutY = rect.top;

                element.find('img').parent().prepend(miniTea);

                var miniTeaRect = miniTea[0].getBoundingClientRect();
                var miniTeaX = miniTeaRect.left;
                var miniTeaY = miniTeaRect.top;

                $animate.animate(miniTea[0], {
                    top: '25%',
                    left: '25%'
                }, {
                    top: checkoutY - miniTeaY + 'px',
                    left: checkoutX - miniTeaX + 'px'
                });
                $timeout(function() {
                    $animate.animate(miniTea[0], {
                        opacity: '.8',
                        transition: '.3s'
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
