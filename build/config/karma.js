module.exports = function(grunt) {
    return {
        karma: {
            dev: {
                options: {
                    files:[
                        '<%= distdir %>/js/jquery.min.js',
                        '<%= distdir %>/js/jquery*.js',
                        '<%= distdir %>/js/angular.min.js',
                        '<%= distdir %>/js/angular*.js',
                        '<%= distdir %>/js/*.js',
                        'test/angular-mocks.js',
                        '<%= distdir %>/js/app/bootstrap.js',
                        '<%= distdir %>/js/app/templates.js',
                        '<%= distdir %>/js/app/**/index.js',
                        '<%= distdir %>/js/app/**/*.js',
                        '<%= srcdir %>/app/**/*Spec.js'
                    ],
                    port:8080,
                    basePath: '',
                    frameworks: ['jasmine'],
                    browsers: ['PhantomJS'],
                    background: false,
                    singleRun: true,

                    plugins : [
                          'karma-jasmine',
                          'karma-phantomjs-launcher',
                          'karma-chrome-launcher',
                          'karma-coverage'
                        ],

                    reporters: ['dots', 'coverage'],
                    preprocessors: {
                        '<%= distdir %>/js/app/**/*.js': ['coverage']
                    },
                    coverageReporter: {
                        type: 'html',
                        dir: 'coverage/'
                    }
                }
            }
        }
    };
};
