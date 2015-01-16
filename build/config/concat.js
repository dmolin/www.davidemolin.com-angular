module.exports = function concat(grunt) {
    return {
        concat: {
            options: {
                separator: ";"
            },
            dev: {
                src: [
                    '<%= srcdir %>/js/jquery.cycle.all.min.js',
                    '<%= srcdir %>/js/jquery.slides.min.js',
                    '<%= workdir %>/app.js',
                    '<%= workdir %>/templates.js'
                ],
                dest: "<%= distdir %>/js/app.js"
            },
            prod: {
                src: [
                    '<%= srcdir %>/js/jquery.cycle.all.min.js',
                    '<%= srcdir %>/js/jquery.slides.min.js',
                    '<%= workdir %>/app.js',
                    '<%= workdir %>/templates.js'
                ],
                dest: '<%= distdir %>/js/app.js'
            }
        }
    };
};
