'use strict';

const fs = require('fs');
const path = require('path');
const R = require('ramda');

const getPluginsArr = require('./lib/getPluginsArr');
const handleEachPlugin = require('./lib/handleEachPlugin');

const getPlugins = function(options, plugins, pathObj) {
    R.forEach(
        R.partial(handleEachPlugin, [options, plugins, pathObj]),
        fs.readdirSync(pathObj.dir)
    );

    return plugins;
};

module.exports = function(m, options) {
    options = options || {};
    return getPlugins(options, getPluginsArr(options), path.parse(m.filename));
};
