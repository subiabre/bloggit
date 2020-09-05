"use strict";

const Lastfm = require('../src/lastfm');
const chai = require('chai');
const assert = chai.assert;

describe('lastfm', () => {
    it('should have user and api key', async function() {
        const fm = new Lastfm;

        assert.isObject(fm);
        assert.isString(fm.apiKey);
        assert.equal(fm.apiPath, 'http://ws.audioscrobbler.com/2.0/');
        assert.equal(fm.apiFormat, '&format=json');
        assert.equal(fm.username, 'f7701');
    });
});
