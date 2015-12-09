'use strict';

const fs = require('fs');
const path = require('path');
const R = require('ramda');

function eachFile(pathObj, plugins, file) {
    let filePath = pathObj.dir + '/' + file;

    if (file === pathObj.base) {
        return;
    }

    if (fs.statSync(filePath).isDirectory()) {
        return;
    }

    plugins[plugins.length] = require(filePath);
}

function requireHapiPluginDir(_module) {
    const pathObj = path.parse(_module.filename);
    let plugins = [];

    fs
        .readdirSync(pathObj.dir)
        .forEach(R.partial(eachFile, [pathObj, plugins]));

    return plugins;
}

module.exports = requireHapiPluginDir;
