angular.module('App.Services', [])
.service('PokemonService', ['$http', function($http) {
  this.getAllPokemon = () => {
    return $http({
      method: 'GET',
      url: '/api/pokemon'
    });
  };

  this.getPokemon = (name) => {
    return $http({
      method: 'GET',
      url: `/api/pokemon/${name}`
    });
  };
}]);
