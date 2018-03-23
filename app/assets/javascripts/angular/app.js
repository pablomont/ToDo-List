


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
      });
      
  $urlRouterProvider.otherwise('/');
}]);