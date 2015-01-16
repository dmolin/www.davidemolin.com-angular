module.exports = function index(grunt) {
    return {
        template: {
            options: {},
            dev: {
                options: {
                    data:{
                        scripts: [
                            '<script src="js/app.js"></script>'
                        ].join('')
                    }
                },

                files: {
                    '<%= distdir %>/index.html': ['src/index.html.tpl']
                }
            },

            prod: {
                options:{
                    data:{
                        scripts: [
                            '<script src="js/app.js"></script>\n'
                        ].join('')
                    }
                },

                files: {
                    '<%= distdir %>/index.html': ['src/index.html.tpl']
                }
            }
        }
    };
};
