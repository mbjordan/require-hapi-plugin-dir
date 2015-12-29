'use strict';

exports.register = function(server, options, next) {
    next();
};

exports.register.attributes = {
    'name': 'plugin2',
    'version': '0.1.0'
};
