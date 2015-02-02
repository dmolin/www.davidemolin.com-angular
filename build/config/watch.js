module.exports = function(grunt) {
    return {
        watch: {
            karma: {
                files: [
                    "src/**/*.js",
                    "src/**/*.html",
                    "src/**/*.css",
                    "src/**/*.png",
                    "src/**/*.jpg",
                    "build/**/*",
                    "../common/static/stylesheets/**/*"
                ],
                tasks: ["dev", "karma"],
                options: { livereload: true }
            }
        }
    };
}
