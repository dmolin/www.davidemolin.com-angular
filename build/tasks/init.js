var path = require('path');

module.exports = function (grunt) {

    grunt.registerTask('init', 'prepare temporary working folder', function(){
        makedir(grunt.config.data.distdir);
        makedir(grunt.config.data.workdir);
    });

    function makedir(dirname) {
        if(!grunt.file.isDir(dirname)) {
            grunt.file.mkdir(dirname);
        }
    }

    function removedir(dirname) {
        if(grunt.file.isDir(dirname)) {
            grunt.file.delete(dirname);
        }
    }

};