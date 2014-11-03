'use strict';

var chai = require('chai');
chai.Assertion.includeStack = true;
var assert = chai.assert;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');
var fs = require('fs');
var logger = require('raptor-logging').logger(module);


describe('raptor-cookies' , function() {

    beforeEach(function(done) {

        done();
    });

    it('should create cookie', function() {
        var CookieManager = require('../lib/CookieManager');
        console.log(typeof CookieManager, CookieManager);
        var req = new require('events').EventEmitter();
        var cm = new CookieManager(req);
        var ck = cm.createCookie('n1', 'v1');
        console.log(ck);
        assert.ok(ck);

    });
});
