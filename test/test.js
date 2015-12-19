'use strict';

const Code = require('code');
const Lab = require('lab');
const reqHapiPluginDir = require('..');
const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

// A mock `module` object with only the one property we need
const _module = {
    'filename': __dirname + '/testDir/index.js'
};

describe('reqHapiPluginDir(module)', function() {
    const data = reqHapiPluginDir(_module);

    it('Retrun an Array with only three files', function(done) {
        expect(data).to.be.an.array();
        expect(data).to.have.length(3);
        done();
    });

    // This test and the below feel a bit pointless, but they're here nonetheless.
    it('Retrun an Array without the index.js file', function(done) {
        expect(data.indexOf('Should not see this file')).to.equal(-1);
        done();
    });

    it('Retrun an Array without the someDir directory', function(done) {
        expect(data.indexOf('{}')).to.equal(-1);
        done();
    });
});

describe('reqHapiPluginDir(module, list)', function() {

    it('Retrun an Array with four files. Adding in an npm installed option.', function(done) {
        const data = reqHapiPluginDir(_module, ['ramda']);
        expect(data).to.be.an.array();
        expect(data).to.have.length(4);
        done();
    });

    it('Retrun an Array with four files. Adding in a local module', function(done) {
        const data = reqHapiPluginDir(_module, ['./test/testDir/someDir']);
        expect(data).to.be.an.array();
        expect(data).to.have.length(4);
        done();
    });

    it('Retrun an Array with four files. Adding in a local and npm module', function(done) {
        const data = reqHapiPluginDir(_module, ['ramda', './test/testDir/someDir']);
        expect(data).to.be.an.array();
        expect(data).to.have.length(5);
        done();
    });
});
