module.exports = function concat(grunt) {
    return {
        concat: {
            options: {
                separator: ";\n"
            },
            prod: {
                src: [
                    '<%= srcdir %>/js/jquery.min.js',
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
