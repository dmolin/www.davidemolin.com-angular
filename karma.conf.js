module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],

        files: [
            'dist/js/**/*.js',
            'src/app/**/*Spec.js'
        ],

        port: 8080,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};
