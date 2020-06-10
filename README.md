# bloggit
Extremely simple and customizable **blog**ging, powered by **git**.

1. [Installation](#Installation)
2. [Usage](#Usage)

## Installation

### Requirements
- node
- npm
- sass

Get the repository:
```console
git clone https://github.com/subiabre/bloggit.git
```

Install all the dependencies:
```console
npm install --save-dev
```

## Usage
Add posts by creating a new file inside the `posts` folder. Posts will need to be written in Markdown. You'll need to add at least an **id** and **title** meta tags inside your post.

```
---
title: Hello world
id: 1
date: June 10, 2020
---
```

Build the sass files:
```console
npm run scss
```

Serve the app:
```console
npm start
```

You'll be presented with the link to see your blog alive and running.

---

#### Disclaimer
I know there are many better static-site generators. I created bloggit for two reasons; to challenge and train myself; and because I wanted to reduce the clutter other static-site generators have, bloggit it's as simple as it can get.
