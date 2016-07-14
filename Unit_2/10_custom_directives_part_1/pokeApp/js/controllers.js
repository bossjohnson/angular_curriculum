app.controller('PokeController', PokeController);

function PokeController($scope, $http, $timeout) {
    $scope.view = {};
    var baseUrl = 'http://pokeapi.co/api/v2/';
    $scope.view.clickedPokemon = [];

    $scope.pokeClick = function(index) {
        $scope.view.clickedPokemon.push(index);
        $timeout(function() {
            $scope.view.clickedPokemon.shift();
        }, 2000);
    };

    $scope.getPokemon = function() {
        $scope.view.ballClicked = true;
        $scope.view.showPokemon = false;

        $http.get(baseUrl + 'pokedex/1')
            .then(function(data) {
                var allPokemon = data.data.pokemon_entries;
                var masterList = [];
                var random5 = [];
                var promises = [];

                for (var i = 0; i < allPokemon.length; i++) {
                    var entryNumber = allPokemon[i].entry_number;
                    masterList.push(entryNumber);
                }

                for (var i = 0; i < 5; i++) {
                    var randInt = Math.ceil(Math.random() * masterList.length);
                    promises.push($http.get('http://pokeapi.co/api/v2/pokemon/' + randInt))
                }

                return Promise.all(promises)
            })
            .then(function(data) {
                $scope.pokemonToShow = [];
                $timeout(function() {
                    for (var i = 0; i < data.length; i++) {
                        var subData = data[i].data;
                        var name = subData.name;
                        var types = subData.types;
                        var abilities = subData.abilities;
                        var sprite = subData.sprites.front_default;

                        var moves = [];
                        for (var j = 0; j < 6; j++) {
                            if (subData.moves[j]) {
                                moves.push(subData.moves[j].move.name)
                            } else {
                                continue;
                            }
                        }

                        var newPokemon = {
                            name: name,
                            types: types,
                            abilities: abilities,
                            sprite: sprite,
                            moves: moves
                        };
                        $scope.pokemonToShow.push(newPokemon);
                    }
                }, 1000);
                $scope.view.ballClicked = false;
            })
    };
}
PokeController.$inject = ['$scope', '$http', '$timeout'];
