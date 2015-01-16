module.exports = function clean(grunt) {
    return {
      clean: {
        pre: ['<%= workdir %>','<%= distdir %>/**/*'],
        post: ['<%= workdir %>']
      }
    };
};
