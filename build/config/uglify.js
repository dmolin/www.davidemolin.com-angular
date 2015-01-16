module.exports = function uglify(grunt) {
    return {
        uglify: {
            options: { mangle:false, sourceMap:false },
            all: {
                files: {
                    '<%= workdir %>/app.js': ['<%= workdir %>/app.js']
                }
            }
        }
    };
};