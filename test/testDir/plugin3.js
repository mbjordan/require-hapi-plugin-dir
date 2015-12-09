'use strict';

exports.register = function(server, options, next) {
    next();
};

exports.register.attributes = {
    'name': 'plugin3',
    'version': '0.1.0'
};
