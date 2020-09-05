const express = require('express');
const app = express();

const showdown = require('showdown');
const converter = new showdown.Converter({
    strikethrough: true,
    tables: true,
    parseImgDimensions: true,
    emoji: true
});

const blog = require('./src/blogObject');

const postsLoader = require('./src/postsLoader');
const loader = new postsLoader;
const postsList = loader.loadFromFolder(blog.order);

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {blog, posts: postsList});
});

app.get('/:id', (req, res) => {
    let id = req.params.id;
    let post = loader.loadById(id);

    // Convert markdown to HTML
    if (post) post.content = converter.makeHtml(post.content);

    // No post found
    if (!post) {
        res.render('404', {blog});
        return;
    }

    res.render('post', {blog, post});
})

const listener = app.listen(process.env.PORT || 3000, () => {
    let stratter = require('stratter');
    let log = stratter(`Bloggit listening on http://localhost:${listener.address().port}`, {
        foreground: 'white',
        background: 'green'
    });

    console.log(log);
});
