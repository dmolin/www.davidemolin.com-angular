var _ = require("lodash"),
    path = require("path"),
    glob = require("glob");

module.exports = function (grunt) {
    grunt.loadTasks("build/tasks");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-template');

    var config = {
        distdir: "dist",
        workdir: ".work",
        srcdir: "src",
        appdir: "src/app",
        pkg: grunt.file.readJSON('package.json')
    };

    //add configuration sections for grunt.initConfig(), all read from build/config
    _.extend(config, _composeGruntConfig(grunt));

    //initialize Grunt with all tasks config objects
    grunt.initConfig(config);

    //console.log(config);

    // Register alias tasks
    grunt.registerTask("stage1", ["clean:pre", "init", "jshint", "copy:assets", "cssmin", "browserify", "ngtemplates"]);
    grunt.registerTask( "dev",  ["stage1", "copy:libs", "concat:dev", "template:dev"]); //, "clean:post"] );
    //grunt.registerTask( "prod", ["stage1", "uglify", "concat:prod", "template:prod", "clean:post"] );

    // Default task.
    grunt.registerTask("default", ["dev"]);

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


    //1. clean dist/ and remove .work/
    //2. lint js (stage 1)
    //3. copy static assets to dist/
	//4. parse js UI templates (= generate one views/templates.js for each module)
    //5. browserify all js files into .work/app.js
	//6. [PROD] uglify .work/app.js
	//7. [PROD] concat all js files together to dist/app.js
	//8. parse and copy index.html.tpl into dist/index.html (insert script tags where needed)
