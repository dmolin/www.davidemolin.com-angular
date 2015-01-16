module.exports = function concat(grunt) {
    return {
        cssmin: {
            combine: {
                files: {
                    '<%= distdir %>/stylesheets/main.css': [
                        'src/static/stylesheets/pure-min.css',
                        'src/static/stylesheets/grids-responsive-min.css',
                        'src/static/stylesheets/general_enclosed_foundicons.css',
                        'src/static/stylesheets/font-awesome.min.css',
                        'src/static/stylesheets/style.css',
                    ]
                }
            }

        }
    };
};
