/*
 * Copy static assets to {distdir}
 */
module.exports = function _copyStaticAssets(grunt) {
    return {
        copy: {
            assets: {
                files: [{ dest: '<%= distdir %>', src : '**', expand: true, cwd: 'src/static/' }]
            },

            //js libs that need to be copied when in dev mode (in prod mode they get assembled into the final app.js file)
            libs: {
                files: [{ dest: '<%= distdir %>/js', src : '**', expand: true, cwd: 'src/js/' }]
            }
        }
    }
};