'use strict';
var utils = require('../utils');

var mod = angular.module('app.projects', []);
//console.log(mod);
utils.includeDirectives(mod, require('./directives'));
utils.includeServices(mod, require('./services'));


module.exports = mod;
