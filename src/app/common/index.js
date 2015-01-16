'use strict';

var _ = require('underscore');

var common = angular.module('app.common', []);
var directives = require('./directives');

_.each(_.keys(directives), function(key) {
    common.directive(key, directives[key]);
});

module.exports = common;
