---
title: React Starter - Steps
date: '2019-04-05T09:00:00-03:00'
tags:
  - react
  - front-end
---
![Simple](https://unsplash.com/photos/QMDap1TAu0g)
# Simple React SPA (webpack + babel)

Steps to build a simple SPA App, from scratch, using React, Babel, and Webpack.

Example app will be a `Bookstore App`.

## 1º Step : Initial setup

```bash
mkdir bookstore && cd $_

yarn init
```

Some questions after that...

```bash
yarn add -D webpack webpack-cli babel-loader @babel/core @babel/preset-env

touch .gitignore webpack.config.js .babelrc
echo "node_modules/" >> .gitignore

```

