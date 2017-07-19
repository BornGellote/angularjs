'use strict';
// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/red", {
        templateUrl : "test_two.html"
    })
    .when("/green", {
        templateUrl : "two_name.html"
    })
    .when("/blue", {
        templateUrl : "two_number.html"
    });
  // $routeProvider.otherwise({redirectTo: '/view1'});
}]);
