'use strict';

const R = require('ramda');

const optionsHasIncludes = R.has('include');

const eachModule = function(arr, include) {
    arr[arr.length] = require(include);
};

const includesExist = function(options) {
    return optionsHasIncludes(options) && R.is(Array, options.include);
};

module.exports = function(options) {
    const arr = [];

    if (includesExist(options)) {
        R.forEach(R.partial(eachModule, [arr]), options.include);
    }

    return arr;
};
