app.factory('jnPriceService', jnPriceService);

function jnPriceService($rootScope) {
    return {
        updateTotal: function() {
            var totalPrice = 0;
            var bag = $rootScope.view.bag;
            for (var i = 0; i < bag.length; i++) {
                totalPrice += bag[i].price * Number(bag[i].quantity);
            }
            $rootScope.view.totalPrice = totalPrice;
        }
    };
}
jnPriceService.$inject = ['$rootScope'];
