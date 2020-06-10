"use strict";

const PostsLoader = require('../src/postsLoader')
const chai = require('chai');
const assert = chai.assert;

describe('postsLoader', () => {
    it('should retrieve an array with the files inside default folder', async function() {
        const posts = new PostsLoader;
        const postsList = posts.loadFromFolder();
        
        assert.isArray(postsList);
        assert.isObject(postsList[0]);
        assert.exists(postsList[0].metadata);
        assert.exists(postsList[0].content);
    });
});
