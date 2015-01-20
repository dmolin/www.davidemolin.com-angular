//var phpMiddleware = require('connect-php');
var exec = require('child_process').exec;

module.exports = function concat(grunt) {
    return {
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: "*",
                    base: "dist",
                    livereload: true,
                    middleware: function(connect, options, middlewares) {
                        var directory = options.directory || options.base[options.base.length-1];
                        middlewares.unshift(function(req, res, next) {
                            if(req.url.match(/.php$/)) {
                                exec('php ' + directory + req.url, function callback(error, stdout, stderr){
                                    if(error) {
                                        console.error(stderr);
                                    }
                                    res.write(stdout);
                                    res.end();
                                    return;
                                });
                            } else {
                                // No .php file? Moving on ...
                                next();
                            }
                        });
                        return middlewares;
                    }
                }
            }
        }
    };
};
