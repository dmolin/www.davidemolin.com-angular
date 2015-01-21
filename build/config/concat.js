var fs = require('fs');

module.exports = function concat(grunt) {
    return {
        concat: {
            options: {
                separator: ";\n"
            },
            prod: {
                src: [
                    '<%= srcdir %>/js/jquery.min.js',
                    '<%= srcdir %>/js/jquery.cycle2.min.js',
                    '<%= srcdir %>/js/jquery.slides.min.js',
                    '<%= srcdir %>/js/underscore-min.js',
                    '<%= srcdir %>/js/xml2json.min.js',
                    '<%= srcdir %>/js/angular.min.js',
                    '<%= srcdir %>/js/angular-ui-router.min.js',
                    '<%= srcdir %>/js/angular-animate.min.js',
                    '<%= srcdir %>/app/bootstrap.js',
                    '<%= srcdir %>/app/**/index.js',
                    '<%= srcdir %>/app/**/*.js',
                    '<%= workdir %>/templates.js'
                ],
                dest: '<%= workdir %>/app.js'
            }
        }
    };
};
