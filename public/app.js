angular.module('App', ['ui.router', 'App.Pokemon', 'App.Services'])
.config(($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise('/');

  const homeState = {
    name: 'home',
    url: '/',
    templateUrl: 'home.html'
  };

  const pokemonState = {
    name: 'pokemon',
    url: '/pokemon',
    templateUrl: 'pokemon/pokemon.html',
    controller: 'PokemonController as PokeCtrl'
  };

  $stateProvider.state(homeState);
  $stateProvider.state(pokemonState);
});
