'use strict';

exports.register = function(server, options, next) {
    next();
};

exports.register.attributes = {
    'name': 'pluginC',
    'version': '0.1.0'
};
