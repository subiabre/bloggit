const express = require('express');
const app = express();

const showdown = require('showdown');
const converter = new showdown.Converter();

const postsLoader = require('./src/postsLoader');
const loader = new postsLoader;
const postsList = loader.loadFromFolder('./posts');

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {posts: postsList});
});

app.get('/:id', (req, res) => {
    let id = req.params.id;
    let post = loader.loadById(id);

    if (!post) res.render('post', {post: {
        metadata: {title: '404'},
        content: 'No post found'
    }});

    if (post) post.content = converter.makeHtml(post.content);

    res.render('post', {post});
})

app.listen(3000, function () {
    let stratter = require('stratter')
    let log = stratter('Bloggit listening on http://localhost:3000', {
        foreground: 'white',
        background: 'green'
    });

    console.log(log);
});
