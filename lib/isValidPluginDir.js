'use strict';

const fs = require('fs');
const R = require('ramda');

const optionsSayKeepFlat = R.has('flat');

const formattedFilePath = function(pathObj, directory) {
    return pathObj.dir + '/' + directory + '/index.js';
};

const fileExists = function(file) {
    // fs.statSync throws an error if file is non-existant. This try/catch will
    // ensure a Boolean result.
    try {
        return fs.statSync(file).isFile();
    } catch (e) {
        return false;
    }
};

const eachDirectoryFile = function(plugins, el) {
    plugins[plugins.length] = el;
};

const processDirectory = function(plugins, pathObj, directory) {
    let include = formattedFilePath(pathObj, directory);

    if (fileExists(include)) {
        include = require(include);
    }

    if (R.is(Array, include)) {
        R.forEach(R.partial(eachDirectoryFile, [plugins]), include);
    }
};

module.exports = function(options, plugins, pathObj, directory) {
    if (!optionsSayKeepFlat(options)) {
        processDirectory(plugins, pathObj, directory);
    }

    return;
};
