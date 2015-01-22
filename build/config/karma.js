module.exports = function(grunt) {
    return {
        karma: {
            dev: {
                options: {
                    files:[
                        'dist/js/jquery.min.js',
                        'dist/js/jquery*.js',
                        'dist/js/angular.min.js',
                        'dist/js/angular*.js',
                        'test/angular-mocks.js',
                        'dist/js/*.js',
                        'dist/js/app/bootstrap.js',
                        //'dist/js/app/**/*.js',
                        'dist/js/app/**/index.js',
                        'dist/js/app/**/*.js',
                        'src/app/**/*Spec.js'
                    ],
                    port:8080,
                    basePath: '',
                    frameworks: ['jasmine'],
                    browsers: ['PhantomJS'],
                    singleRun: true,

                    plugins : [
                          'karma-jasmine',
                          'karma-phantomjs-launcher',
                          'karma-chrome-launcher'
                        ]
                }
            }
        }
    };
};
