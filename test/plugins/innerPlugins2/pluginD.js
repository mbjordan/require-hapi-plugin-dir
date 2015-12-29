'use strict';

exports.register = function(server, options, next) {
    next();
};

exports.register.attributes = {
    'name': 'pluginD',
    'version': '0.1.0'
};
