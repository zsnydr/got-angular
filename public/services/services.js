angular.module('App.Services', [])
.service('PokemonService', ['$http', function($http) {
  this.getPokemon = () => {
    return $http({
      method: 'GET',
      url: '/api/pokemon'
    });
  };
}]);
