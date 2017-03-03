angular.module('App.Pokemon', [])
.controller('PokemonController', ['$scope', 'PokemonService', function($scope, PokemonService) {
  PokemonService.getPokemon()
  .then(({ data }) => {
    this.pokemons = data;
  })
  .catch((err) => {
    console.log(`Error getting Pokemon: ${err}`);
  });
}]);
