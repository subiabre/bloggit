"use strict";

const dotenv = require('dotenv');
const http = require('http');
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
        this.api_key = process.env.LAST_FM_API_KEY;
    }

    /**
     * Fetch Last.fm API
     * @param {String} method
     */
    async fetchLastfm(method)
    {
        return new Promise((resolve, reject) => {
            let api = API + method + '&user=' + this.username + '&api_key=' + this.api_key + API_FORMAT;

            http.get(api, (res) => {
                let json = '';

                res.on('data', (data) => {
                    json += data;
                });

                res.on('end', () => {
                    let data = JSON.parse(json);

                    resolve(data);
                });
            }).on('error', (error) => {
                reject('error');
            });
        });
    }

    async getLatestTrack()
    {
        let tracks = await this.fetchLastfm('?method=user.getrecenttracks');

        return tracks.recenttracks.track[0];
    }
}

module.exports = Lastfm;
