app.filter('details', function() { // filter out Title, Year, Actors, Poster, imdbID, Type, Response, Plot
    return function(movie) {
        var details = {};
        var filterOut = ['Title', 'Year', 'Actors', 'Poster', 'imdbID', 'Type', 'Response', 'Plot'];
        for (var key in movie) {
            if (filterOut.indexOf(key) === -1) {
                details[key] = movie[key];
            }
        }
        return details;
    };
});
