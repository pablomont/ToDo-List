


var app = angular.module('app', ['templates', 'ui.router','ngResource']);
 
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'angular/templates/items/home.html',
      controller: 'ItemsController'
    })
    .state('home.addItem', {
        url: 'editItem',
        templateUrl: 'angular/templates/items/addItem.html',
        controller: 'ItemsController'
      })
      .state('home.verItems', {
        url: 'verItems',
        templateUrl: 'angular/templates/items/verItems.html',
        controller: 'ItemsController'
      });
      
  $urlRouterProvider.otherwise('/');
}]);