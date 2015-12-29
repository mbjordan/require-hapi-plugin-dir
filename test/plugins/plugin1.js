'use strict';

exports.register = function(server, options, next) {
    next();
};

exports.register.attributes = {
    'name': 'plugin1',
    'version': '0.1.0'
};
