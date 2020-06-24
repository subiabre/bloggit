# bloggit
Extremely simple and customizable **blog**ging, powered by **git**.

1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Customization](#Customization)

## Installation

### Requirements
- node
- npm
- sass

Get the repository:
```console
git clone https://github.com/subiabre/bloggit.git
```

Install the dependencies:
```console
npm install
```

## Usage
Add posts by creating a new file inside the `posts` folder. Posts will need to be written in Markdown. 

You'll need to add at least a **title**, **id** and **date** meta tags inside your post using the YAML syntax. The file name can be whatever you want.

```yaml
---
title: Hello world
id: 1
date: June 10, 2020
---
```

Build the css files from your scss:
```console
npm run build-css
```

Serve the app:
```console
npm start
```

You'll be presented with the link to see your blog alive and running. To host your blog online you can use GitLab pages or whatever thing that it can run a node app and be linked to your bloggit blog repo. I host [mine](http://imnotanerd.herokuapp.com) in Heroku.

### Syncing remote source and own blog
To host your own blog from bloggit you'll have to manage two remotes: the source code from [this repository](https://github.com/subiabre/bloggit.git) and the source code at your own blog repo.

To make it easier to distinguish between the two remotes we'll name the bloggit source as `source` and your actual blog repo as `origin`. After clonning:

Rename the origin as `source`
```console
git remote rename origin source
```

After you have created a new repository in your GitHub or GitLab, add that remote to your local clone as `origin`
```console
git remote add origin <url>
```

Now, when you need to pull to your blog, just `git push origin` and whenever you want to get bloggit updates then:
```console
git stash
git pull source
git stash pop
```

An **easier** solution would be to just remove this repository from the `origin` at all and only keep your actual blog remote url, but that would not allow you to receive updates on the source code.

## Customization
This package itself is a bare bone bloggit application, you can customize and build on top of it very easily.

### Info and settings
To modify your blog's name or posts show order, simply modify the `blogObject` file in the `src` folder. This file is where you'll want to save all your general settings. Simply add more properties inside the constructor.

### Templates and styles
Bloggit uses [pug](https://pugjs.org/) for templating and [scss](https://sass-lang.com/) for styling. You can easily change the layout of your blog and the styles of it by modifying the source files inside the `views` folder.

---

#### Disclaimer
I know there are many better static-site generators. I created bloggit for two reasons; to challenge and train myself; and because I wanted to reduce the clutter other static-site generators have, bloggit it's as simple as it can get. Plus it's *my* blog and runs on something *I made*.
