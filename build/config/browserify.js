_ = require('underscore');

module.exports = function browserify(grunt) {

    return {
        browserify: {
            dist: {
                files: {
                    '<%= workdir %>/app.js': ['src/app/bootstrap.js']
                },
                options: {
                    browserifyOptions: {
                      fullPaths: true
                    }
                }
            }
        }
    };
};
