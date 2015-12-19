'use strict';

const fs = require('fs');
const path = require('path');
const R = require('ramda');

const eachModule = function(arr, include) {
    arr[arr.length] = require(include);
};

const getPluginsArr = function(includes) {
    const arr = [];

    if (R.is(Array, includes)) {
        R.forEach(R.partial(eachModule, [arr]), includes);
    }

    return arr;
};

const eachFile = function(pathObj, plugins, file) {
    const filePath = pathObj.dir + '/' + file;

    if (file === pathObj.base || fs.statSync(filePath).isDirectory()) {
        return;
    }

    plugins[plugins.length] = require(filePath);
};

module.exports = function(m, includes) {
    const pathObj = path.parse(m.filename);
    const plugins = getPluginsArr(includes);

    R.forEach(
        R.partial(eachFile, [pathObj, plugins]),
        fs.readdirSync(pathObj.dir)
    );

    return plugins;
};
