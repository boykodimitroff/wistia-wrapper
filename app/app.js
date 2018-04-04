'use strict';

angular.module('app', [
  'ngRoute',
  'wistia'
]).
config(['$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/wistia'});
}]);
