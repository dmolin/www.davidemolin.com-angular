'use strict';

var angular = require('angular'),
    uiRouter = require('angular-ui-router'),
    home = require('./home');

var app = angular.module('app', [ 'ui.router', home.name ]);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        //Home state
        .state('home', {
            url: '/',
            templateUrl: 'home/home.html',
            controller: 'HomeController'
        });
});
