app.filter('kebab', function() {
    return function(input) {
        if (typeof input === 'string') {
            return input.split('_').join('-');
        } else {
            return input;
        }
    }
});

app.filter('camel', function() {
    return function(input) {
        var str = input.split('');
        for (var i = 0; i < str.length; i++) {
            if (str[i] === '_' || str[i] === '-') {
                str.splice(i, 2, str[i + 1].toUpperCase())
            }
        }
        return str.join('');
    }
});

app.filter('pigLatin', function() {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return function(input) {
        var words = input.split(' ');
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            var firstLetter = word[0];
            if (firstLetter) {
                if (vowels.indexOf(firstLetter.toLowerCase()) !== -1) {
                    words[i] = punctuate(word + "-yay");
                } else {
                    var capitalize = word[0] === word[0].toUpperCase() ? true : false;
                    word = punctuate(word.slice(1) + '-' + firstLetter.toLowerCase() + 'ay');
                    words[i] = capitalize ? word[0].toUpperCase() + word.slice(1) : word;
                }
            }
        }
        return words.join(' ');
    }
});

function punctuate(word) {
    if (word.indexOf('.') !== -1) {
        word = word.replace('.', '');
        return word + '.';
    } else if (word.indexOf('!') !== -1) {
        word = word.replace('!', '');
        return word + '!';
    } else if (word.indexOf(',') !== -1) {
        word = word.replace(',', '');
        return word + ',';
    } else {
        return word;
    }
}

app.filter('redact', function() {
    return function(input, redactThis) {
        var words = input.split(' ');
        for (var i = 0; i < words.length; i++) {
            if (words[i] === redactThis || words[i] === redactThis[0].toUpperCase() + redactThis.slice(1)) {
                words[i] = 'REDACTED';
            }
        }
        return words.join(' ');
    }
});
