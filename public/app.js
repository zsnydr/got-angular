const App = angular.module('App', ['ui.router', 'HousesController', 'CharactersController']);

App.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: 'home.html'
    })
  .state('houses', {
    url: '/houses',
    templateUrl: 'houses.html',
    controller: 'HousesController'
  })
  .state('characters', {
    url: '/characters',
    templateUrl: 'characters.html',
    controller: 'CharactersController'
  });
});
