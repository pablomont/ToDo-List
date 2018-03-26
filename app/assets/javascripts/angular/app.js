


var app = angular.module('app', ['templates', 'ui.router','ngResource']);
 
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'angular/templates/items/home.html',
      controller: 'ItemsController'
    })
    .state('home.addItem', {
        url: 'addItem',
        templateUrl: 'angular/templates/items/addItem.html',
        controller: 'ItemsController'
      })
      .state('home.items', {
        url: 'items',
        templateUrl: 'angular/templates/items/items.html',
        controller: 'ItemsController'
      })
      .state('home.viewItem', {
        url: 'item/:id',
        templateUrl: 'angular/templates/items/viewItem.html',
        controller: 'ItemsController'
      })
      
      
  $urlRouterProvider.otherwise('/');
}]);