app.filter('convertPrice', function() {
    return function(input) {
        // convert 4-digit price data to decimal form
        if (input === 0) {
            return '$0';
        }
        var cents = input.toString().slice(-2);
        var dollars = input.toString().slice(0, -2);
        return `$${dollars}.${cents}`; // ES6 template literals!
    }
});

app.filter('booleanForDummies', function() {
    return function(input) {
        // convert true to 'Yes' and false to 'No'
        return input ? 'Yes' : 'No';
    }
});
