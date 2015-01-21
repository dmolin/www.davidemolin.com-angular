My Personal Homepage as a SPA (Single Page Application) - Angular version
==========================================================================

Please, have a look [here](https://github.com/dmolin/www.davidemolin.com) for the Backbone.js version.

[![ScreenShot](https://raw.github.com/dmolin/www.davidemolin.com/master/README/davidemolin.jpg)](http://www.davidemolin.com)

### Technologies Used ###

- Angular.js (1.3.9) with jQuery (used only for the jquery plugins)
- Node.js + Grunt and a bunch of plugins for the build process

### Why I didn't use browserify and/or commonJS ###

I originally started this project using browserify and commonjs modules. I really like the way commonjs allows you to pack your code into discreet modules; this is also the approch I followed in building the Backbone.js version of this website.

Then, along the road, I started to have a few problems, especially when having to deal with template loading, whith commonjs modules having to fetch dependencies from other modules (with require() path starting to resemble marching ants, like: require('../../app/common/module'))

Finally, I ended up stumbling on this fantastic blog post [here](https://medium.com/@dickeyxxx/best-practices-for-building-angular-js-apps-266c1a4a6917). All of a sudden, I realised that with Angular modules I really didn't need to use commonjs.. and life started to smile back at me instantly.

The result is this project. Clean code, easy to read, easy to process with Grunt and its concat plugin and easy to assemble in dev/prod modes (uncompressed and not concatenated when developing, compressed/minified/optimized when releasing in production).
