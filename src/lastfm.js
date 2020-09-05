"use strict";

const dotenv = require('dotenv');
const API = 'http://ws.audioscrobbler.com/2.0/'
const API_FORMAT = '&format=json'

/**
 * Get's data from my Last.fm
 */
class Lastfm
{
    constructor()
    {
        dotenv.config();

        this.username = 'f7701';
        this.apiKey = process.env.LAST_FM_API_KEY;
        this.apiPath = API;
        this.apiFormat = API_FORMAT;
    }
}

module.exports = Lastfm
