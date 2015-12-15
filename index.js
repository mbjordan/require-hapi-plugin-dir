'use strict';

const fs = require('fs');
const path = require('path');

const eachFile = function(pathObj, plugins, file) {
    const filePath = pathObj.dir + '/' + file;

    if (file === pathObj.base || fs.statSync(filePath).isDirectory()) {
        return;
    }

    plugins[plugins.length] = require(filePath);
    return plugins;
};

module.exports = function(_module) {
    const pathObj = path.parse(_module.filename);
    const plugins = [];

    fs
        .readdirSync(pathObj.dir)
        .forEach(eachFile.bind(null, pathObj, plugins));

    return plugins;
};
