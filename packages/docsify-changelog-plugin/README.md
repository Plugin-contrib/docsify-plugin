# docsify-changelog-plugin

This is a docsify plugin to render changelog from given path

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
[![](https://data.jsdelivr.com/v1/package/npm/docsify-changelog-plugin/badge)](https://www.jsdelivr.com/package/npm/docsify-changelog-plugin)

## Installation

Add the following stylesheet along with your other stylesheets

```html
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/docsify-changelog-plugin@latest/dist/style.css"
/>
<link
  rel="stylesheet"
  href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
/>
```

And add the following script

```html
<script src="https://cdn.jsdelivr.net/npm/docsify-changelog-plugin@latest/dist/index.js"></script>
```

## Configure

In your docsify config object add the following

```js
window.$docsify = {
...
loadNavbar : false, // IMPORTANT
changelog : 'CHANGELOG.md' // path of your changelog, it can be remote as well
...
}
```

And add the following custom nav bar

```html
<nav></nav>
```

> Note that `loadNavbar` options should be set to `false` and if you want to extend the navbar to write your own, write it in your `index.html` as `nav` element

### Thanks it, Now enjoy :tada: your changelog integration with docsify

## Screen Shot

<p align="center">

<img alt="ss" src="https://imgur.com/JAr22Ik.png" width="400px" />
<br/>
<img alt="ss" src="https://imgur.com/FGljyYR.png" width="400px" />

</p>

## Contribution Guide

- Clone the repo
- start editing on `src/index.js` and `src/style.styl`
- The build step using
  - the `styl -> css` using `styl` CLI
  - Optimize the generated style using `cssnano` and `postcss`
  - Build the javascript using `rollup`
  - optimize it using `rollup-plugin-terser`
  - styling rule using `standard`

## Faq

**Is it responsive?**
Not yet! soon, I will add the styles to make it responsive

**Will it break `mergeNavbar` options?**
May be

**Can I change the style of the button and the panel?**
Not yet !, but soon it will be possible using css variable
