'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function(mod) {
    const pathObj = path.parse(mod.filename);
    let plugins = [];

    fs.readdirSync(pathObj.dir)
        .forEach(function(file) {
            if (file === pathObj.base) return;

            let reqdFile = require(pathObj.dir + '/' + file);
            plugins[plugins.length] = reqdFile;
        });

    mod.exports = plugins;
};
