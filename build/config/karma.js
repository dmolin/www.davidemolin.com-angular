module.exports = function(grunt) {
    return {
        karma: {
            /*
            dev: {
                files:[
                    'dist/js/ ** / *.js',
                    'src/app/ ** / *Spec.js'
                ],
                basePath: '',
                frameworks: ['jasmine'],
                browsers: ['PhantomJS'],
                singleRun: true
            }
            */

                configFile: 'karma.conf.js'

        }
    };
};
