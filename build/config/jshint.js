module.exports = function _jshint(grunt) {
    return {
        jshint: {
            options: { jshintrc: true },
            files: ['src/app/**/*.js', '!**/templates.js']
        }
    }
};