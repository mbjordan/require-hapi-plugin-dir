'use strict';

const fs = require('fs');

const isValidPluginDir = require('./isValidPluginDir');

const formattedFilePath = function(pathObj, file) {
    return pathObj.dir + '/' + file;
};

const isDirectory = function(pathObj, file) {
    return fs.statSync(formattedFilePath(pathObj, file)).isDirectory();
};

const ensureNonBaseFile = function(plugins, pathObj, file) {
    if (file !== pathObj.base) {
        plugins[plugins.length] = require(formattedFilePath(pathObj, file));
    }
};

module.exports = function(options, plugins, pathObj, file) {
    if (isDirectory(pathObj, file)) {
        return isValidPluginDir(options, plugins, pathObj, file);
    }

    ensureNonBaseFile(plugins, pathObj, file);
};
