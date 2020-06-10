"use strict";

const PostsLoader = require('../src/postsLoader')
const chai = require('chai');
const assert = chai.assert;

describe('postsLoader', () => {
    it('should retrieve an array with the files inside default folder', async function() {
        const loader = new PostsLoader;
        const postsList = loader.loadFromFolder();
        
        assert.isArray(postsList);
        assert.isObject(postsList[0]);
        assert.exists(postsList[0].metadata);
        assert.exists(postsList[0].content);
    });

    it('should retrieve a single post by id', async function() {
        const loader = new PostsLoader;
        const post = loader.loadById('1');

        assert.isObject(post);
        assert.exists(post.metadata);
        assert.exists(post.content);
    });
});
