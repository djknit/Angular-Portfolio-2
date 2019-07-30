'use strict';

angular
  .module('portfolioApp')
  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
        .when('/', {
          template: '<main-view></main-view>'
        })
        .otherwise('/');
    }
  ]);
