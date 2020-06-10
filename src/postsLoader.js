"use strict";

const fs = require('fs');
const parseMD = require('parse-md').default;

/**
 * Load and organize the posts from the posts folder
 */
class PostsLoader
{
    /**
     * Load the posts from the given folder
     * @param {Boolean} reverse Reverse the array order
     * @param {String} dirname The posts folder
     * @returns {Array}
     */
    loadFromFolder(reverse = false, dirname = './posts')
    {
        let posts = new Array;
        let files = fs.readdirSync(dirname, 'utf-8');

        // Remove .gitignore and read all files
        files.shift();
        files.forEach((file) => {
            let read = fs.readFileSync(`${dirname}/${file}`, 'utf8');
            let {metadata, content} = parseMD(read);
            let post = {metadata: metadata, content: content};
            
            posts.push(post);
        });

        // Sort posts by id
        posts.sort((a, b) => {
            if (a.metadata.id > b.metadata.id) return 1;
            if (a.metadata.id < b.metadata.id) return -1;

            return 0;
        });

        if (reverse) posts.reverse();

        return posts;
    }

    /**
     * Load a single post by its id
     * @param {Number} id Post id
     * @param {String} dirname The posts folder
     * @returns {Object} Post object
     */
    loadById(id, dirname = './posts')
    {
        let posts = this.loadFromFolder(false, dirname);
        
        let post = posts.filter((post) => {
            return post.metadata.id == id;
        });

        return post[0] || null;
    }
}

module.exports = PostsLoader
