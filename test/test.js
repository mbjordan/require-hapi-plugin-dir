'use strict';

const Code = require('code');
const Lab = require('lab');
const reqHapiPluginDir = require('../index');
const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

// A mock `module` object with only the one property we need
const _module = {
    'filename': __dirname + '/plugins/index.js'
};

describe('reqHapiPluginDir(module)', function() {

    it('Retrun an Array with length of 7 [files]', function(done) {
        const data = require('./plugins');

        expect(data).to.be.an.array();
        expect(data).to.have.length(7);
        done();
    });

    it('Retrun an Array with all 7 plugins in proper order, by name and Array index', function(done) {
        const data = require('./plugins');

        expect(data).to.be.an.array();
        expect(data[0].register.attributes.name).to.equal('pluginA');
        expect(data[1].register.attributes.name).to.equal('pluginB');
        expect(data[2].register.attributes.name).to.equal('pluginC');
        expect(data[3].register.attributes.name).to.equal('pluginD');
        expect(data[4].register.attributes.name).to.equal('plugin1');
        expect(data[5].register.attributes.name).to.equal('plugin2');
        expect(data[6].register.attributes.name).to.equal('plugin3');
        done();
    });
});

describe('reqHapiPluginDir(module, options)', function() {
    it('Retrun an Array with length of 3 [files], when the `flat` option is set', function(done) {
        const options = {
            'flat': true
        };
        const data = reqHapiPluginDir(_module, options);

        expect(data).to.be.an.array();
        expect(data).to.have.length(3);
        done();
    });

    it('Retrun an Array with length of 8 [files], adding in an npm installed option.', function(done) {
        const options = {
            'include': ['ramda']
        };
        const data = reqHapiPluginDir(_module, options);

        expect(data).to.be.an.array();
        expect(data).to.have.length(8);
        done();
    });

    it('Retrun an Array with length of 8 [files], adding in a local module', function(done) {
        const options = {
            'include': [__dirname + '/plugins/innerPlugins1/pluginA']
        };
        const data = reqHapiPluginDir(_module, options);

        expect(data).to.be.an.array();
        expect(data).to.have.length(8);
        done();
    });

    it('Retrun an Array with length of 9 [files], adding in a local and npm module', function(done) {
        const options = {
            'include': ['ramda', __dirname + '/plugins/innerPlugins1/pluginA']
        };
        const data = reqHapiPluginDir(_module, options);

        expect(data).to.be.an.array();
        expect(data).to.have.length(9);
        done();
    });

    it('Retrun an Array with length of 5 [files] (when the `flat` option is set), adding in a local and npm module', function(done) {
        const options = {
            'include': ['ramda', __dirname + '/plugins/innerPlugins1/pluginA'],
            'flat': true
        };
        const data = reqHapiPluginDir(_module, options);

        expect(data).to.be.an.array();
        expect(data).to.have.length(5);
        done();
    });
});
