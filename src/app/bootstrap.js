'use strict';

var app = angular.module('app', ['ui.router', 'app.common', 'app.home', 'app.projects', 'app.recommendations', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        //Home state
        .state('home', {
            url: '/',
            templateUrl: 'home/home.html',
            controller: 'app.home.HomeController'
        })
        .state('section', {
            url: '/section/:sectionId',
            templateUrl: 'home/home.html',
            controller: 'app.home.HomeController'
        });
});
