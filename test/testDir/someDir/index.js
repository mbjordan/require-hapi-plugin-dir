'use strict';

exports.register = function(server, options, next) {
    next();
};

exports.register.attributes = {
    'name': 'someDirPlugin',
    'version': '0.1.0'
};
