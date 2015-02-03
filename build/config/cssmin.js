module.exports = function concat(grunt) {
    return {
        cssmin: {
            combine: {
                files: {
                    '<%= distdir %>/stylesheets/main.css': [
                        '<%= assetsdir %>/static/stylesheets/pure-min.css',
                        '<%= assetsdir %>/static/stylesheets/grids-responsive-min.css',
                        '<%= assetsdir %>/static/stylesheets/general_enclosed_foundicons.css',
                        '<%= assetsdir %>/static/stylesheets/font-awesome.min.css',
                        '<%= assetsdir %>/static/stylesheets/main.css'
                    ]
                }
            }

        }
    };
};
