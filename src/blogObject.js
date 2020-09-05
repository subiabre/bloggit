"use strict";

const Lastfm = require("./lastfm");

/**
 * Contains the blog info
 */
class Blog
{
    constructor()
    {
        /**
         * Display name of the blog
         */
        this.name = "I'm not a nerd";

        /**
         * Should the posts order be from last to first?
         */
        this.order = true;

        /**
         * Text at blog foot
         */
        this.footerText = `2020 &copy; ${this.name}`;

        /**
         * Last song I heard by last.fm
         */
        this.fm = new Lastfm;
    }
}

module.exports = new Blog;
