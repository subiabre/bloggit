"use strict";

const Lastfm = require('../src/lastfm');
const chai = require('chai');
const assert = chai.assert;

describe('lastfm', () => {
    it('should retrieve last song from last.fm', async function() {
        const last = new Lastfm;
        const song = await last.getLatestTrack();

        assert.isObject(song);
    });
});
