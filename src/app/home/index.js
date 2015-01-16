'use strict';

var homeModule = angular.module('app.home', []);
var homeController = require('./HomeController');
var sectionDirective = require('./sectionDirective');

homeModule.controller('HomeController', homeController);
homeModule.directive('dmSection', sectionDirective);

module.exports = homeModule;
