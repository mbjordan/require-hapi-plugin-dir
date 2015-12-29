'use strict';

exports.register = function(server, options, next) {
    next();
};

exports.register.attributes = {
    'name': 'pluginA',
    'version': '0.1.0'
};
