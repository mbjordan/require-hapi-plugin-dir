'use strict';

exports.register = function(server, options, next) {
    next();
};

exports.register.attributes = {
    'name': 'pluginB',
    'version': '0.1.0'
};
