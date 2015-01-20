module.exports = function(grunt) {
    return {
        watch: {
            all: {
                files: [
                    "src/**/*.js",
                    "src/**/*.html",
                    "src/**/*.css",
                    "src/**/*.png",
                    "src/**/*.jpg",
                    "build/**/*"
                ],
                tasks: ["dev"],
                options: { livereload: true }
            }
        }
    };
}
