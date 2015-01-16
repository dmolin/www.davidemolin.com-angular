module.exports = function ngtemplates(grunt) {
    return {
      ngtemplates: {
        app: {
            cwd: 'src/app',
            src: '**/*.html',
            dest: '<%= workdir %>/templates.js'
        }
      }
    };
};
