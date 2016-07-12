app.factory('jnMathService', function() {
    return {
        add: function(arg1, arg2) {
            return arg1 + arg2;
        },
        subtract: function(arg1, arg2) {
            return arg1 - arg2;
        },
        multipy: function(arg1, arg2) {
            return arg1 * arg2;
        },
        divide: function(arg1, arg2) {
            return arg1 / arg2;
        },
        power: function(arg1, arg2) {
            return Math.pow(arg1, arg2);
        }
    };
});
