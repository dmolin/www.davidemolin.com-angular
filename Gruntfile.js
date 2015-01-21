var _ = require("lodash"),
    path = require("path"),
    glob = require("glob");

module.exports = function (grunt) {
    grunt.loadTasks("build/tasks");
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-template');

    var config = {
        distdir: "dist",
        workdir: ".work",
        srcdir: "src",
        appdir: "src/app",
        assetsdir: "../common",
        pkg: grunt.file.readJSON('package.json')
    };

    //add configuration sections for grunt.initConfig(), all read from build/config
    _.extend(config, _composeGruntConfig(grunt));

    //initialize Grunt with all tasks config objects
    grunt.initConfig(config);

    //console.log(config);

    // Register alias tasks
    grunt.registerTask("stage1", ["clean:pre", "init", "jshint", "copy:assets", "cssmin", "ngtemplates"]);
    grunt.registerTask( "dev",  ["stage1", "copy:libs", "copy:app", "template:dev", "clean:post"] );
    grunt.registerTask( "prod", ["stage1", "concat:prod", "uglify", "copy:prod", "template:prod", "clean:post"] );

    // Default task.
    grunt.registerTask("default", ["dev", "connect", "watch"]);

};

function _composeGruntConfig(grunt) {
    var config = {};
    var configTasks = glob.sync("build/config/*.js");
    _.each(configTasks, function(cfg) {
        var name = cfg.substr(0, cfg.indexOf(path.extname(cfg)));
        var fn = require("./" + name);
        if(_.isFunction(fn)) { _.extend(config, fn(grunt)); }
    });
    return config;
}
