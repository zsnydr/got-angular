angular.module('App.Pokemon', [])
.controller('PokemonController', ['$scope', 'PokemonService', function($scope, PokemonService) {
  this.fetchPokemon = () => {
    PokemonService.getAllPokemon()
    .then(({ data }) => {
      this.pokemons = data;
    })
    .catch((err) => {
      console.log(`Error getting All Pokemon in Ctrl: ${err}`);
    });
  };

  this.selectPokemon = ({ name }) => {
    PokemonService.getPokemon(name)
    .then(({ data }) => {
      this.active = data;
    })
    .catch((err) => {
      console.log(`Error getting Pokemon in Ctrl: ${err}`);
    });
  };

  this.fetchPokemon();
}]);
