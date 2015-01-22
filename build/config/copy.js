/*
 * Copy static assets to {distdir}
 */
module.exports = function _copy(grunt) {
    return {
        copy: {
            assets: {
                files: [{ dest: '<%= distdir %>', src : '**', expand: true, cwd: '<%= assetsdir %>/static/' }]
            },

            //js libs that need to be copied when in dev mode (in prod mode they get assembled into the final app.js file)
            libs: {
                files: [{ dest: '<%= distdir %>/js', src : '**', expand: true, cwd: 'src/js/' }]
            },

            app: {
                files: [
                    { dest: '<%= distdir %>/js/app', src : ['**', '!**/*Spec.js'], expand: true, cwd: 'src/app/' },
                    { dest: '<%= distdir %>/js/app', src : '**/*.js', expand: true, cwd: '<%= workdir %>' }
                ]
            },

            prod: {
                files: [
                    {dest: '<%= distdir %>/js', src:'app.js', expand:true, cwd: '<%= workdir %>' }
                ]
            }

        }
    }
};
