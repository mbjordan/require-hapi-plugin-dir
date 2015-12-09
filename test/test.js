'use strict';

const Code = require('code');
const Lab = require('lab');
const R = require('ramda');
const reqHapiPluginDir = require('../index');
const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

describe('require-hapi-plugin-dir', function() {
    const data = reqHapiPluginDir({
        'filename': __dirname + '/testDir/index.js'
    });

    it('Retrun an Array with only three files', function(done) {
        expect(data).to.be.an.array();
        expect(data).to.have.length(3);
        done();
    });

    it('Retrun an Array without the index.js file', function(done) {
        expect(R.indexOf('Should not see this file', data)).to.equal(-1);
        done();
    });

    it('Retrun an Array without the someDir directory', function(done) {
        expect(R.indexOf('{}', data)).to.equal(-1);
        done();
    });
});
