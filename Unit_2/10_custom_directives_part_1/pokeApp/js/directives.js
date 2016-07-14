app.directive('jnPokemonItem', function() {
    return {
        templateUrl: 'partials/showPokemon.html',
        restrict: 'E',
        scope: {
            name: '=',
            types: '=',
            abilities: '=',
            sprite: '=',
            moves: '=',
            pokeClick: '='
        }
    };
});
