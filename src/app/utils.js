var _ = require('underscore');

module.exports =  {
    includeDirectives: function(module, directives) {
        if(!directives) {
            return null;
        }

        _.each(_.keys(directives), function(key) {
            module.directive(key, directives[key]);
        });

        //in case we want to use the return value...
        return directives;
    },

    includeServices: function(module, services) {
        if(!services) {
            return null;
        }

        _.each(_.keys(services), function(key) {
            services[key](module);
        });
        return services;
    }
};
