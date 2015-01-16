module.exports = function concat(grunt) {
    return {
        concat: {
            options: {
                separator: ";"
            },
            dev: {
                src: ['<%= workdir %>/app.js', '<%= workdir %>/templates.js'],
                dest: "<%= distdir %>/js/app.js"
            },
            prod: {
                src:  [
                    '<%= workdir %>/app.js', '<%= workdir %>/templates.js'
                ],
                dest: '<%= distdir %>/js/app.js'
            }
        }
    };
};
