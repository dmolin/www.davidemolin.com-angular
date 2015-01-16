'use strict';

var _ = require('underscore');

var utils = require('../utils');
var common = angular.module('app.common', []);


/*
var directives = require('./directives');

_.each(_.keys(directives), function(key) {
    common.directive(key, directives[key]);
});
*/
utils.includeDirectives(common, require('./directives'));

module.exports = common;
